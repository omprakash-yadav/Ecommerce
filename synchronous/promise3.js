console.log("This is massage-1(synch)");
setTimeout(() => {
  console.log("this massese-2(SetTimeout)");
}, 0);

const promise = new Promise((resolve, reject) => {
  resolve();
});
promise.then(function (resolve) {
  console.log("This masses-3(promise)");
});
console.log("this masses-4(synch)");
