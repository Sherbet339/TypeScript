class Car {
    model: String;
    doors: Number;
    isAWD: Boolean;

    constructor(model:String, doors:Number, isAWD:Boolean) {
        this.model = model;
        this.doors = doors;
        this.isAWD = isAWD;
    }

    displayDetail(): void {
        console.log(`This is ${this.model} with ${this.doors} and ${this.isAWD}`)
    }
}

const car1 = new Car("Accourd", 4 , true) 
car1.displayDetail();