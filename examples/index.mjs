import { isinstof } from '../index.mjs'
import { Animal, Predator, Primate, Dog } from './animals.example.mjs'
import { OrientalCat } from './oriental.example.mjs'

const animal = new Animal('Ann')
const predator = new Predator('Jackal')
const dog = new Dog('William')
const oriental = new OrientalCat('Dina')

console.log('--- intro')
console.log('animal is Animal', animal instanceof Animal)
console.log('dog is Dog', dog instanceof Dog)

const all = [animal, predator, dog, oriental]
all.forEach(pet => {
  console.log(`${pet.constructor.name} "${pet.name}" is ${pet.breathe()}`)
})
console.log('---')
all.forEach(pet => {
  console.log(`Animal "${pet.name}" is ${pet.move()}`)
})
console.log('---')

const pets = [animal, predator, dog, oriental]
pets.forEach(pet => {
  console.log(`Pet "${pet.name}" is ${pet.eat()}`)
})
console.log('---')

const predators = [predator, dog, oriental]
predators.forEach(pet => {
  console.log(`Predator "${pet.name}" is ${pet.hunt()}`)
})
console.log('---')
// console.log('dog.name', dog.constructor)
// console.log('cat.name', cat.constructor)

// const primates = [oriental]
// primates.forEach(pet => {
//   console.log(`Primate "${pet.name}" is ${pet.take()}`)
// })
console.log('---')

console.log('animal is Animal', animal.instanceof(Animal))
console.log('predator is Animal', predator.instanceof(Animal))
console.log('predator is Predator', predator.instanceof(Predator))



console.log('--- OrientalCat')
console.log('oriental is Animal', oriental.instanceof(Animal))
console.log('oriental is Primate', oriental.instanceof(Primate))
console.log('oriental is Predator', oriental.instanceof(Predator))
console.log('oriental is Dog', oriental.instanceof(Dog))
console.log('oriental is OrientalCat', oriental.instanceof(OrientalCat))

console.log('---')
console.log('oriental.prototype', Object.getPrototypeOf(oriental))
// console.log('oriental.constructor', oriental.constructor)
console.log('oriental.constructor', Object.getPrototypeOf(oriental).constructor)
console.log('oriental.parent.constructor', Object.getPrototypeOf(Object.getPrototypeOf(oriental)).constructor)

console.log('---')
console.log('oriental.ancestors', oriental.supers.map(s => s.constructor))
console.log('oriental.ancestors', Object.getPrototypeOf(oriental).supers.map(s => s.constructor))
console.log('oriental.parent.ancestors', (Object.getPrototypeOf(Object.getPrototypeOf(oriental)).supers ?? []).map(s => s.constructor))

console.log('---')
console.log('Primate.prototype', Primate.prototype)
console.log('---')
console.log('OrientalCat.prototype', OrientalCat.prototype)
console.log('oriental.parent.prototype', Object.getPrototypeOf(Object.getPrototypeOf(oriental)))
console.log('oriental.parent.parent.prototype', Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(oriental))))
console.log('oriental.parent.parent.parent.prototype', Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(oriental)))))
