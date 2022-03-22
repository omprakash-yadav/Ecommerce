function doWork(para1, callback) {
  console.log(`it's starting my ${para1} work`);
  callback();
}

doWork("project", function () {
  console.log("complit my work");
});
