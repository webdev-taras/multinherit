import test from 'node:test'
import { ok, equal, notEqual, deepEqual, throws } from "node:assert/strict";

import {
  Animal,
  Predator,
  Primate,
  Dog,
} from '../../examples/animals.example.mjs'
import { OrientalCat } from '../../examples/oriental.example.mjs'
import { isinstof } from '../../index.mjs'

test('animal', t => {
  const animal = new OrientalCat('Dina')

  t.test('is instanceof Animal', t => {
    ok(animal instanceof Animal)
  })
  
  t.test('is instanceof Predator', t => {
    ok(animal instanceof Predator)
  })
  
  t.test('is instanceof Primate', t => {
    ok(!(animal instanceof Primate)) // not direct inheritance
    ok(isinstof(animal, Primate))
  })

  t.test('is instanceof Dog', t => {
    ok(animal instanceof Dog)
  })

  t.test('has name', t => {
    equal(animal.name, 'Dina')
    deepEqual(structuredClone(animal), { name: 'Dina' })
  })
  
  t.test('has Animal methods', t => {
    equal(animal.breathe(), 'breathing')
    notEqual(animal.move(), 'moving') // overrided
    equal(animal.move(), 'fast running')
    equal(animal.eat(), 'eating')
  })
  
  t.test('has Predator methods', t => {
    equal(animal.hunt(), 'hunting')
    equal(animal.sneak(), 'sneaking')
  })
  
  t.test('has Primate methods', t => {
    equal(animal.take(), 'taking')
    equal(animal.hike(), 'hiking')
  })

  t.test('has Dog methods', t => {
    notEqual(animal.run(), 'running') // overrided
    equal(animal.move(), 'fast running')
  })

  t.test('has OrientalCat methods', t => {
    equal(animal.sniff(), 'sniffing')
  })
})
