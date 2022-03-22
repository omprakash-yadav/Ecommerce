let sum = (a, b) => {
  return a + b;
};
let mul = (a, b) => {
  return a * b;
};

let calculate = (a, b, callback) => {
  return callback(a, b);
};
console.log(calculate(4, 5, sum));
console.log(calculate(5, 6, mul));
