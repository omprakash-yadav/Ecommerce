class Car {
    constructor() {
        console.log("I am car constructor ")
    }
    getModelNumber() {
        return "X1 Model";
    }
    getColer() {
        return "black"
    }
}
class Bmw extends Car {
    constructor(name) {
        //this.name=anme,  ====>ReferenceError, super needs to be called first!
        super(name)
        //this.name = name
        console.log("I am constructor " + name)

    }
    getModelNumber() {
        return super.getModelNumber()
    }
}
class Tesla extends Car {
    constructor(coler) {
        super(coler)
        console.log("I am constructor of " + coler)
    }
    getColer() {
        return super.getColer();
    }

}
let obj = new Bmw("model x1");
console.log(obj.getModelNumber());

let obj2 = new Tesla("Black");
obj2.getColer()
// let obj1 = new Car()
// obj1.getModelNumber()
// console.log(obj1.getModelNumber("X2 model"));