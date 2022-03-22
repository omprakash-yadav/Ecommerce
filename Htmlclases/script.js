let detail = {
    name: "op",
    age: 20,
    number: 20000
}
let newDetail = { ...detail }
//console.log(newDetail)
let newAge = newDetail.age = 40
console.log(newAge)