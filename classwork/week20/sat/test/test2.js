class Vehicle {
  constructor(make, year) {
    this._make = make;
    this._year = year;
  }

  get make() {
    return this._make;
  }

  get year() {
    return this._year;
  }

  fullName() {
    return '${this.make} ${this.year}';
  }
}

class Motorcycle extends Vehicle {
  constructor(make, year) {
    super(make, year); //use super when you want to call functions of the object's parent. I don't want to re-write this function. I just want to use Vehicle's constructor function.
  }

  fullName() {
    return 'Motorcycle ${this.make} ${this.year}';
  }
}

var harley = new Motorcycle('harley', 1942);

console.log(harley._make)
console.log(harley._year)
console.log(harley.fullName());
