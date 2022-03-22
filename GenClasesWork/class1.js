
class Person {
    constructor() {

    }
    greeting() {
        console.log("Welcome to the mathod greeting");

    }
    getFood() {
        console.log("I am food mathod");
    }
    static getWack() {
        console.log("i am wack mathod");
    }

}

let person1 = new Person()
person1.greeting()
let person2 = new Person()
person2.getFood()
Person.getWack()
