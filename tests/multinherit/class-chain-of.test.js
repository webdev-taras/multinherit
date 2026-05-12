import test from 'node:test'
import { ok, equal, notEqual, deepEqual, throws } from "node:assert/strict";

import {
  Animal,
  Predator,
  Primate,
  Dog,
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
      Dog,
      OrientalCat
    ])
  })

  t.test('returns full chain', t => {
    const chain = classChainOf(OrientalCat)
    deepEqual(chain, [ 
      Object,
      Animal,
      Predator,
      Dog,
      Primate,
      OrientalCat
    ])
  })
})
