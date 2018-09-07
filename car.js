class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGears[0];
    }
    shift(gear) {
        if(this.userGears.indexOf(gear) < 0) 
            throw new Error(`Invalid gear: ${gear}`);
        this.userGear = gear;
    }
}

const car = new Car("Kia", "K3");
console.log(car);

car.shift('D');
console.log(car);

car.shift('I');
console.log(car);

