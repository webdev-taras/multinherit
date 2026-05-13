import test from 'node:test'
import { ok, equal, notEqual, deepEqual, throws } from "node:assert/strict";

import {
  Animal,
  Predator,
  Dog,
  Cat,
  Primate,
  Monkey,
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
    equal(animal.eat(), 'eating')
  })
  
  t.test('has Predator methods', t => {
    equal(animal.hunt(), 'hunting')
    equal(animal.sneak(), 'sneaking')
    equal(animal.move(), animal.sneak())
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
    equal(animal.eat(), 'eating')
  })
  
  t.test('has Predator methods', t => {
    equal(animal.hunt(), 'hunting')
    equal(animal.sneak(), 'sneaking')
  })

  t.test('has Dog methods', t => {
    equal(animal.run(), 'runing')
    equal(animal.move(), animal.run())
  })
})


test('cat', t => {
  const animal = new Cat('Leo')

  t.test('is instanceof Animal', t => {
    ok(animal instanceof Animal)
  })
  
  t.test('is instanceof Predator', t => {
    ok(animal instanceof Predator)
  })
  
  t.test('is instanceof Cat', t => {
    ok(animal instanceof Cat)
  })
  
  t.test('has name', t => {
    equal(animal.name, 'Leo')
    deepEqual(structuredClone(animal), { name: 'Leo' })
  })
  
  t.test('has Animal methods', t => {
    equal(animal.breathe(), 'breathing')
    notEqual(animal.move(), 'moving') // overwritten
    equal(animal.eat(), 'eating')
  })
  
  t.test('has Predator methods', t => {
    equal(animal.hunt(), 'hunting')
    equal(animal.sneak(), 'sneaking')
  })

  t.test('has Dog methods', t => {
    equal(animal.walk(), 'walking')
    equal(animal.move(), animal.walk())
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
    equal(animal.eat(), 'eating')
  })
  
  t.test('has Primate methods', t => {
    equal(animal.take(), 'taking')
    equal(animal.hike(), 'hiking')
    equal(animal.move(), animal.hike())
  })
})

test('dog', t => {
  const animal = new Monkey('Coco')

  t.test('is instanceof Animal', t => {
    ok(animal instanceof Animal)
  })
  
  t.test('is instanceof Primate', t => {
    ok(animal instanceof Primate)
  })
  
  t.test('is instanceof Monkey', t => {
    ok(animal instanceof Monkey)
  })
  
  t.test('has name', t => {
    equal(animal.name, 'Coco')
    deepEqual(structuredClone(animal), { name: 'Coco' })
  })
  
  t.test('has Animal methods', t => {
    equal(animal.breathe(), 'breathing')
    notEqual(animal.move(), 'moving') // overwritten
    equal(animal.eat(), 'eating')
  })
  
  t.test('has Primate methods', t => {
    equal(animal.take(), 'taking')
    equal(animal.hike(), 'hiking')
  })

  t.test('has Monkey methods', t => {
    equal(animal.climb(), 'climbing')
    equal(animal.move(), animal.climb())
  })
})
