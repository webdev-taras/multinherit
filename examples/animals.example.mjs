import { inherit } from '../index.mjs'

export const Animal = inherit('Animal', [], {
	constructor(name) {
		this.name = name
	},
	breathe() { return 'breathing' },
	move() { return 'moving' },
	eat() { return 'eating' },
})

export const Predator = inherit('Predator', [Animal], {
	hunt() { return 'hunting' },
	sneak() { return 'sneaking' },
	move() { return this.sneak() },
})

export const Dog = inherit('Dog', [Predator], {
	run() { return 'runing' },
	move() { return this.run() },
})

export const Cat = inherit('Cat', [Predator], {
	walk() { return 'walking' },
	move() { return this.walk() },
})

export const Primate = inherit('Primate', [Animal], {
	take() { return 'taking' },
	hike() { return 'hiking' },
	move() { return this.hike() },
})

export const Monkey = inherit('Monkey', [Primate], {
	climb() { return 'climbing' },
	move() { return this.climb() },
})
