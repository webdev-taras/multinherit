function Animal (name) {
  this.name = name
}
Animal.prototype = Object.create(Object.prototype)
Animal.prototype.constructor = Animal

Animal.prototype.breathe = function() {
	return 'breathing'
}

Animal.prototype.move = function() {
	return 'moving'
}

Animal.prototype.eat = function() {
	return 'eating'
}


// Predator <= Animal
function Predator (...args) {
  Animal.apply(this, args)
}
Predator.prototype = Object.create(Animal.prototype)
Predator.prototype.constructor = Predator

Predator.prototype.hunt = function() {
	return 'hunting'
}

Predator.prototype.sneak = function() {
	return 'sneaking'
}

Predator.prototype.move = function() {
	return this.sneak()
}

// Primate <= Animal
function Primate (...args) {
  Animal.apply(this, args)
}
Primate.prototype = Object.create(Animal.prototype)
Primate.prototype.constructor = Primate

Primate.prototype.take = function() {
	return 'taking'
}

Primate.prototype.hike = function() {
	return 'hiking'
}

Primate.prototype.move = function() {
	return this.hike()
}

/*
class Primate extends Animal {
  take() {
	  return 'taking'
  }
}
*/


// Dog <= Predator <= Animal
function Dog (...args) {
  Predator.apply(this, args)
}
Dog.prototype = Object.create(Predator.prototype)
Dog.prototype.constructor = Dog

Dog.prototype.run = function() {
	return 'runing'
}

Dog.prototype.move = function() {
	return this.run()
}

export {
  Animal,
  Predator,
  Primate,
  Dog,
}
