function masterchainof (master, exclude = []) {
  const protochain = []
  let proto = master
  while (proto) {
    if (!exclude.includes(proto)) protochain.unshift(proto)
    proto = Object.getPrototypeOf(proto)
  }
  return protochain
}

function protobaseof (supers) {
  const [ master, ...rest ] = supers

  const protobase = [master]
  const fullchain = masterchainof(master)
  for (const parent of rest) {
    const chain = masterchainof(parent, fullchain)
    protobase.push(...chain)
    fullchain.push(...chain)
  }
  return protobase
}

function protochainof (master) {
  const parents = [...(master.protobase ?? []), master]
  // console.log('parents = ', protolistof(parents))
  const protobase = []
  const fullchain = []
  for (const parent of parents) {
    const chain = masterchainof(parent, fullchain)
    protobase.push(...chain)
    fullchain.push(...chain)
  }
  // console.log('fullchain = ', protolistof(fullchain))
  return fullchain
}

export function classChainOf (ctor, full = true) {
  const protochainfn = full ? protochainof : masterchainof
  const protochain = protochainfn(ctor.prototype ?? Object.prototype)
  return protochain.map(proto => proto.constructor ?? Object)
}

// function protolistof (protochain) {
//   const chain = protochain.map(proto => proto.constructor ?? Object)
//   return chain.map(ctor => ctor.name ?? '')
// }

// ctor(name, proto(supers(from), methods), init)
export function inherit (name, from = [], stamp = {}) {
  const { statics = {}, ...methods } = stamp
  const parents = (from.length > 0) ? [...from] : [Object]

  const supers = parents.map(ctor => ctor.prototype)
  const protobase = protobaseof(supers)

  const [ master, ...rest ] = protobase
  const proto = Object.assign(
    Object.create(master, statics),
    ...rest,
    methods,
    {
      super: master,
      supers,
      protobase,
    }
  )

  // proto.protochain = protochain
  const ctor = Object.hasOwn(methods, 'constructor')
    ? function (...args) {
      methods.constructor.apply(this, args)
    }
    : function (...args) {
      parents.map(parent => parent.apply(this, args))
    }
  ctor.prototype = proto
  proto.constructor = ctor
  Object.defineProperty(ctor, 'name', {
    value: name,
    configurable: true // Required if you want to change it again later
  })
  return ctor
}

export function instanceOf (inst, ctor) {
  const chain = (inst.protobase ?? []).map(proto => proto.constructor ?? Object)
  return chain.includes(ctor) || inst instanceof ctor
}

export function extendObjectType() {
  Object.class = inherit
  Object.classChainOf = classChainOf
  Object.prototype.instanceOf = function (ctor) {
    return instanceOf(this, ctor)
  }
}
