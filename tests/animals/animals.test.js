import test from 'node:test'
import { ok, equal, notEqual, deepEqual, throws } from "node:assert/strict";

import {
  Animal,
  Predator,
  Primate,
  Dog,
} from '../../examples/animals.example.mjs'

test('animal', t => {
  const animal = new Animal('Ann')

  t.test('is instanceof Animal', t => {
    ok(animal instanceof Animal)
  })
  
  t.test('has name', t => {
    equal(animal.name, 'Ann')
    deepEqual(structuredClone(animal), { name: 'Ann' })
  })
  
  t.test('has Animal methods', t => {
    equal(animal.breathe(), 'breathing')
    equal(animal.move(), 'moving')
    equal(animal.eat(), 'eating')
  })
})

test('predator', t => {
  const animal = new Predator('Jackal')

  t.test('is instanceof Animal', t => {
    ok(animal instanceof Animal)
  })
  
  t.test('is instanceof Predator', t => {
    ok(animal instanceof Predator)
  })
  
  t.test('has name', t => {
    equal(animal.name, 'Jackal')
    deepEqual(structuredClone(animal), { name: 'Jackal' })
  })
  
  t.test('has Animal methods', t => {
    equal(animal.breathe(), 'breathing')
    notEqual(animal.move(), 'moving') // overwritten
    equal(animal.move(), 'sneaking')
    equal(animal.eat(), 'eating')
  })
  
  t.test('has Predator methods', t => {
    equal(animal.hunt(), 'hunting')
    equal(animal.sneak(), 'sneaking')
  })
})

test('primate', t => {
  const animal = new Primate('Gorilla')

  t.test('is instanceof Animal', t => {
    ok(animal instanceof Animal)
  })
  
  t.test('is instanceof Primate', t => {
    ok(animal instanceof Primate)
  })
  
  t.test('has name', t => {
    equal(animal.name, 'Gorilla')
    deepEqual(structuredClone(animal), { name: 'Gorilla' })
  })
  
  t.test('has Animal methods', t => {
    equal(animal.breathe(), 'breathing')
    notEqual(animal.move(), 'moving') // overwritten
    equal(animal.move(), 'hiking')
    equal(animal.eat(), 'eating')
  })
  
  t.test('has Primate methods', t => {
    equal(animal.take(), 'taking')
    equal(animal.hike(), 'hiking')
  })
})

test('dog', t => {
  const animal = new Dog('William')

  t.test('is instanceof Animal', t => {
    ok(animal instanceof Animal)
  })
  
  t.test('is instanceof Predator', t => {
    ok(animal instanceof Predator)
  })
  
  t.test('is instanceof Dog', t => {
    ok(animal instanceof Dog)
  })
  
  t.test('has name', t => {
    equal(animal.name, 'William')
    deepEqual(structuredClone(animal), { name: 'William' })
  })
  
  t.test('has Animal methods', t => {
    equal(animal.breathe(), 'breathing')
    notEqual(animal.move(), 'moving') // overwritten
    equal(animal.move(), 'runing')
    equal(animal.eat(), 'eating')
  })
  
  t.test('has Predator methods', t => {
    equal(animal.hunt(), 'hunting')
    equal(animal.sneak(), 'sneaking')
  })

  t.test('has Dog methods', t => {
    equal(animal.run(), 'runing')
  })
})
