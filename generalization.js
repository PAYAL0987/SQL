class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    start() {
      console.log(${this.make} ${this.model} is starting.);
    }
  }
  
  class Car extends Vehicle {
    drive() {
      console.log(${this.make} ${this.model} is driving.);
    }
  }
  
  class Truck extends Vehicle {
    loadCargo() {
      console.log(${this.make} ${this.model} is loading cargo.);
    }
  }
  
  const myCar = new Car("Toyota", "Corolla");
  myCar.start();  // Toyota Corolla is starting.
  myCar.drive();  // Toyota Corolla is driving.
  
  const myTruck = new Truck("Ford", "F-150");
  myTruck.start();      // Ford F-150 is starting.
  myTruck.loadCargo();  // Ford F-150 is loading cargo.