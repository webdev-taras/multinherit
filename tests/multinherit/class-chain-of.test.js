import test from 'node:test'
import { ok, equal, deepEqual } from "node:assert/strict";

import {
  Animal,
  Predator,
  Dog,
  Cat,
  Primate,
  Monkey,
} from '../../examples/animals.example.mjs'
import { OrientalCat } from '../../examples/oriental.example.mjs'
import { classChainOf } from '../../index.mjs'

test('classChainOf', t => {
  const animal = new OrientalCat('Dina')

  t.test('returns master chain', t => {
    const chain = classChainOf(OrientalCat, false)
    deepEqual(chain, [ 
      Object,
      Animal,
      Predator,
      Cat,
      OrientalCat
    ])
  })

  t.test('returns full chain', t => {
    const chain = classChainOf(OrientalCat)
    deepEqual(chain, [ 
      Object,
      Animal,
      Predator,
      Cat,
      Primate,
      Monkey,
      Dog,
      OrientalCat
    ])
  })
})
