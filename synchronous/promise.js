const doWork = (callback) => {
  setTimeout(() => {
    const data = ["Apple", "Banana", "Grapes", "Mango"];
    // callback("it soesn't gose well  " + data);
    callback(false + data);
  }, 3000);
};
const callback = (err, result) => {
  if (err) return console.log(err);
  return console.log(result);
};
doWork(callback);
