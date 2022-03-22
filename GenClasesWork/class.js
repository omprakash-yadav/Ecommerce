class Animal {
    constructor(horse) {
        this.horse = horse

    }
    static getRun() {

        console.log("animal runs with speed of 20km");


    }
    static getStop() {
        console.log("animal stands at this position 0");

    }
}
let animal = new Animal("Horse");
console.log(animal)
console.log(Animal.getRun())
console.log(Animal.getStop())