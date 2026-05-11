import { Primate, Dog } from './animals.example.mjs'

const OrientalCat = Object.class('Oriental', [Dog, Primate], {
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

console.log('===')
console.log('OrientalCat', OrientalCat)
console.log('===')

export {
  OrientalCat
}
