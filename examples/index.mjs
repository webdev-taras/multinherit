import { extendObjectType } from '../index.mjs'
import { Animal, Predator, Primate, Dog } from './animals.example.mjs'
import { OrientalCat } from './oriental.example.mjs'

extendObjectType()

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

const toName = ctor => ctor.name ?? ''

console.log('---')
// chain = [Object, Animal, Predator, Dog, Primate, ?Oriental]
console.log('OrientalCat masterchain list: ', Object.classChainOf(OrientalCat, false).map(toName))
console.log('OrientalCat protochain list: ', Object.classChainOf(OrientalCat).map(toName))

console.log('===')
console.log('OrientalCat', OrientalCat.prototype)
console.log('===')
