import { Dog, Cat, Monkey } from './animals.example.mjs'
import { inherit } from '../index.mjs'

// super = prototype: Cat
// supers = prototype: [Cat, Monkey, Dog]
// protobase = prototype: [Cat, Primate, Monkey, Dog]
// protochain = prototype: [Object, Animal, Predator, Cat, Primate, Monkey, Dog, OrientalCat]
export const OrientalCat = inherit('OrientalCat', [Cat, Monkey, Dog], {
  statics: {
    origin: {
      value: 'Thailand',
      enumerable: true,
    },
  },
  constructor(...args) {
    // call just Cat (super) constructor
    this.super.constructor.apply(this, args)
  },
  sniff() { return 'sniffing' },
  run() { return 'fast running' },
  // move like Dog (supers[2]), i.e. call run() method
  move(...args) { return this.supers[2].move.apply(this, args) },
})
