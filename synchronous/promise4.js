const value = 2;
const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 10);
  console.log(random);

  if (random === value) {
    resolve("you have gussed Number correctly");
  } else {
    reject("Worng number");
  }
});
promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));
