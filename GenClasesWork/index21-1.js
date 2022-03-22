let fruits = ["Apple", "Mango", "Kiwi", "coconut"];
//####for loop

// let result = "  "
// for (let i = 0; i < fruits.length; i++) {
//     result += ` ${fruits[i]} `
// }
// console.log(result)

//************************************** */   
// for (let fruitss in fruits) {
//     console.log(fruits[fruitss])
// }
// for (let fruitss of Object.entries(fruits)) {
//     console.log(fruitss)
// }s

//*********************************** */
//##for in loop
// let result = " ";
// for (let key in fruits) {
//     result += ` ${fruits[key]} `
// }
// console.log(result)

//##for of loop
// let result = " ";
// for (let fruit of fruits) {
//     result += ` ${fruit} `
// }
// console.log(result)
//##Es5 forEach function
let result = " "
fruits.forEach(function (fruit) {
    result += ` ${fruit} `

})
console.log(result)

fruits.forEach((x) => (result += ` ${x} `));
console.log(result)