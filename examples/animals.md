# classes

Animal
  Predator
    Dog
    Cat
  Primate
    Monkey

Wild
Adopted

Jumpable

AdoptedCat <= [Cat, Adopted]
WildDog <= [Dog, Adopted]
OrientalCat <= [AdoptedCat, Monkey, Dog]

# methods

Animal.breathe
Animal.eat

  Predator.hunt

  Primate.take / grasp

Animal.move
  Predator.sneak
    Dog.run
    Cat.walk
  Primate.hike
    Monkey.climb

Animal.sound
  Predator.?
    Dog.bark
    Cat.meow
  Primate.?
    Monkey.scream

Wild.bite
Adopted.hug

Jumpable.jump
  [Dog, Cat, Monkey].jump
