// function Car(make, model) {
//     this.make = make;
//     this.model = model;
//   }


// console.log(Car);

// const car = new Car('Honda', 'Civic');
// console.log(car);

// *** ES5 *** //
/*
function Potion(name) {
    this.types = ['strength', 'agility', 'health'];
    //this.name = name;
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
  
    if (this.name === 'health') {
      this.value = Math.floor(Math.random() * 10 + 30);
    } else {
      this.value = Math.floor(Math.random() * 5 + 7);
    }
  }
*/

// *** ES6 Constructor function *** //

class Potion {
  // If no arguments come from new potion, there is no need for constructor declaration
  constructor(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if (this.name === 'health') {
      this.value = Math.floor(Math.random() * 10 + 30);
    } else {
      this.value = Math.floor(Math.random() * 5 + 7);
    }
  }
}

  
  module.exports = Potion;