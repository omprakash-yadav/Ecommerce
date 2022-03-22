const sum = (num1, num2) => num1 + num2;

const promise = new Promise((resolve, reject) => {
  const value = sum(2, 4);
  if (value === 6) resolve(value);
  else reject("promise rejected");
});

const promise2 = new Promise((resolve, reject) => {
  const value = sum(4, 4);
  if (value === 4) resolve(value);
  else reject("second promise rejected");
});

const promise3 = new Promise((resolve, reject) => {
  const value = sum(2, 2);
  if (value === 4) resolve(value);
  else reject("Third promise rejected");
});

const peromiseAll = Promise.allSettled([promise, promise2, promise3]);
peromiseAll
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(peromiseAll);
