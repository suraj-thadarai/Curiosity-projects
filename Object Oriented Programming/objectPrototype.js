/*
    A better way is to use the prototype of Bird. Properties in the prototype are 
    shared among ALL instances of Bird. Here's how to add numLegs to the Bird 
    prototype:
    
    Bird.prototype.numLegs = 2;
    Now all instances of Bird have the numLegs property.

    console.log(duck.numLegs);
    console.log(canary.numLegs);
    Since all instances automatically have the properties on the prototype, think of 
    a prototype as a "recipe" for creating objects. Note that the prototype for duck 
    and canary is part of the Bird constructor as Bird.prototype.

    Add a numLegs property to the prototype of Dog
*/

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");