class Man {
    constructor(name) {
        this.name = name,

            console.log(`Name:${this.name} `)

    }
};
class Employe extends Man {
    constructor(name, position) {
        super(name)
        this.position = position
        console.log(`postion:${position}`)


    }


}
let obj = new Employe("Raj", "tester")