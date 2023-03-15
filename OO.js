class Vehicle {
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        console.log('beep')
    }
    toString(){
        console.log(`This vehicle is a ${this.year} ${this.make} ${this.model}`)
    }
}

const test = new Vehicle('ford','escape','2012');

class Car extends Vehicle {
    constructor(make,model,year) {
        super(make,model,year);
    }

    numWheels(){
        console.log('4');
    }
}

const test2 = new Car('GMC','Terrain','2015');

class MotorCycle extends Vehicle {
    constructor(make,model,year){
        super(make,model,year);
    }

    numWheels(){
        console.log('2');
    }

    revEngine(){
        console.log('VRRROOOOOOOOM');
    }
}

const test3 = new MotorCycle("Honda", "Nighthawk", 2000);

class Garage {
    constructor(cars){
        this.vehicles  = [];
        this.capactiy = cars
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
          return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
          return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
      }

}