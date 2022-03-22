const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = ["Apple", "mango", "Banana"];
    if (data.length == 3) {
      resolve(data);
    } else {
      reject("somthin wrong happend");
    }
  }, 3000);
});
//console.log(promise);

promise.then((result) => {
  console.log(result);
});
promise.catch((error) => console.error(error));

//.then is a callback function => use to print the data
//catch => should be handled using catch
