class Person {
    constructor(name, age) {
        this.name = name,
            this.age = age
        console.log(`name:${this.name} Age:${this.age}`)



    }
    greeting() {
        console.log("Welcome to the mathod greeting");

    }
    getFood() {
        console.log("I am food mathod");
    }
    static getWack() {
        console.log("i am wack Static mathod");
    }

}

let person1 = new Person("omprakash", 22)
person1.greeting()
let person2 = new Person("Raju", 20)
person2.getFood()
Person.getWack()
