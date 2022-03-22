let data = [
    {
        name: "Joey",
        age: 3,
        type: "dog",
    },

    {
        name: "Lizzy",
        age: 6,
        type: "dog",
    },

    {
        name: "Red",
        age: 2,
        type: "dog",
    },

    {
        name: "Sheru",
        age: 4,
        type: "dog",
    },

    {
        name: "Butters",
        age: 6,
        type: "dog",
    },
];

// Sum of all dogs ages in human years

// MRF approch
// let TotalDogAges = data.reduce(function (accumulator, ages) {
//     return accumulator + ages.age
// }, 0)
// console.log(TotalDogAges)
//###################
// Sum of all dogs ages in human years

// MRF approch
// 1.Identify the type of the dog
// 1.return the data where dog type="dog"
// 2.Multiply dog age by 7 that===human age
// new age of the dog
// multiply the dog age *7(MAP)
// 3.sum of the all the dog ages
// reduce function

// let age = data
//     .filter((d) => {
//         return d.type === "dog";
//     })
//     .map((d) => {
//         return d.age * 7;
//     })
//     .reduce((sum, d) => {
//         return sum + d;
//     });
// console.log(age);

// let ages = data.map(function (c) {
//     return c.age;

// })
// console.log(ages)

let oldestage = data.reduce(function (old, ages) {
    return (old.age || 0) > ages.age ? old : ages
})
console.log(oldestage)