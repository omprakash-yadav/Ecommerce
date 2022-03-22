let makeUpercase = (name) => {
  return name.toUpperCase();
};
let reversString = (name) => {
  return name.split("").reverse().join("");
};
let handlerName = (name, callback) => {
  return callback(name);
};
console.log(handlerName("omprakash", makeUpercase));
console.log(handlerName("omprakash", reversString));
