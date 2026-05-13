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
import { OrientalCat } from '../../examples/oriental.example.mjs'
import { instanceOf } from '../../index.mjs'

test('animal', t => {
  const animal = new OrientalCat('Dina')

  t.test('is instanceof Animal', t => {
    ok(animal instanceof Animal)
  })
  
  t.test('is instanceof Predator', t => {
    ok(animal instanceof Predator)
  })
  
  t.test('is instanceof Cat', t => {
    ok(animal instanceof Cat)
  })

  t.test('is instanceof Dog', t => {
    ok(!(animal instanceof Dog)) // not direct inheritance
    ok(instanceOf(animal, Dog))
  })

  t.test('is instanceof Primate', t => {
    ok(!(animal instanceof Primate)) // not direct inheritance
    ok(instanceOf(animal, Primate))
  })

  t.test('is instanceof Monkey', t => {
    ok(!(animal instanceof Monkey)) // not direct inheritance
    ok(instanceOf(animal, Monkey))
  })

  t.test('has origin', t => {
    equal(animal.origin, 'Thailand')
  })

  t.test('has name', t => {
    equal(animal.name, 'Dina')
    deepEqual(structuredClone(animal), { name: 'Dina' })
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

  t.test('has Cat methods', t => {
    equal(animal.walk(), 'walking')
    notEqual(animal.move(), 'walking') // overwritten
  })

  t.test('has Dog methods', t => {
    notEqual(animal.run(), 'running') // overwritten
    notEqual(animal.move(), 'running') // overwritten
  })
  
  t.test('has Primate methods', t => {
    equal(animal.take(), 'taking')
    equal(animal.hike(), 'hiking')
    notEqual(animal.move(), 'taking') // overwritten
  })

  t.test('has Monkey methods', t => {
    equal(animal.climb(), 'climbing')
    notEqual(animal.move(), 'climbing') // overwritten
  })

  t.test('has OrientalCat methods', t => {
    equal(animal.sniff(), 'sniffing')
    equal(animal.run(), 'fast running')
    equal(animal.move(), animal.run())
  })
})
