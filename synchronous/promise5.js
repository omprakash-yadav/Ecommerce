const promise1 = new Promise(function (resolve, reject) {
  const sum = 10 + 10;
  if (sum === 20) resolve("Success");
  else reject("Failure");
});
promise1.then((succ) => console.log(succ)).catch;
