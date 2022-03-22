var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
];
for (let i = 0; i < obj.length; i++) {
    console.log(`
    person: ${obj[i].person}
    age: ${obj[i].age}
    company: ${obj[i].company} `);
}
console.log("#################");
for (let key in obj) {
    console.log(` 
    person:${obj[key].person}
    age:${obj[key].age}
    company:${obj[key].company}`);
}
console.log("$$$$$$$$$$$$$$$$");
for (let key of obj) {
    console.log(`
    person: ${key.person}
    age: ${key.age}
    company: ${key.company}`);
}
console.log("@@@@@@@@@@@@@@@@@");
obj.forEach(function (key) {
    console.log(`
      person:${key.person}
      age:${key.age}
      company:${key.company}`)
});
