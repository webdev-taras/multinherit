import { Dog, Cat, Monkey } from './animals.example.mjs'
import { inherit } from '../index.mjs'

// class = prototype: OrientalCat
// super = prototype: Cat
// supers = prototype: [Cat, Monkey, Dog]
// protobase = prototype: [Cat, Primate, Monkey, Dog]
// protochain = prototype: [Object, Animal, Predator, Cat, Primate, Monkey, Dog, OrientalCat]
const OrientalCat = inherit('OrientalCat', [Cat, Monkey, Dog], {
  statics: {
    origin: {
      value: 'Thailand',
      enumerable: true,
    },
  },
  constructor(...args) {
    console.log('arguments: ', args)
    this.super.constructor.apply(this, args)
  },
  sniff() { return 'sniffing' },
  run() { return 'fast running' },
  move(...args) { return this.supers[2].move.apply(this, args) },
})

export {
  OrientalCat
}
