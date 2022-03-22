class Grandparent {
    constructor() {

    }
    parrentAcet() {
        return "i kg goold and  100 acer land";
    }
}
class parent extends Grandparent {
    constructor() {
        super()
    }
    parrentAcet() {
        return super.parrentAcet()
    }
}
class Child extends parent {
    constructor(company) {
        super(company)
        console.log("company:" + company)
    }
    parrentAcet() {
        return super.parrentAcet()
    }
}
let obj = new Child("Software");
console.log(obj.parrentAcet())