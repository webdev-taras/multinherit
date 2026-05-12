import { Primate, Dog } from './animals.example.mjs'
import { inherit } from '../index.mjs'

// class = prototype: Oriental
// super = prototype: Dog
// supers = prototype: [Dog, Cat, Monkey]
// protobase = prototype: [Dog, Cat, Primate, Monkey]
// protochain = prototype: [Object, Animal, Predator, Dog, Cat, Primate, Monkey, ?Oriental]

// parents = [Dog, Cat, Monkey] <= supers.constructor
// base = [Dog, Cat, Primate, Monkey] <= protobase.constructor
// chain = [Object, Animal, Predator, Dog, Cat, Primate, Monkey, ?Oriental]
const OrientalCat = inherit('OrientalCat', [Dog, Primate], {
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
  // hike() { return 'hiking' },
  // move() { return this.hike() },
  run() { return 'fast running' },
  // move() { return this.supers[1].move() },
  move(...args) { return this.super.move.apply(this, args) },
})

export {
  OrientalCat
}
