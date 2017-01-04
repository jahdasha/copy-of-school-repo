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

var vehicle = new Vehicle('STEYR PUCH Pinzgauer', 1987);

console.log(vehicle.make); // STEYR PUCH Pinzgauer
console.log(vehicle.fullName()); // STEYR PUCH Pinzgauer 1987
vehicle.make = 'Subaru WRX';
console.log(vehicle.make); //Subaru WRX

// ---------------------------------

var bentley = new Vehicle('Bentley GT', 2017);
console.log(bentley.make);
