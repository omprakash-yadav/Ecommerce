function myfun1() {
  setTimeout(function () {
    console.log("I am first function");
  }, 1000);
}
function myfun2() {
  console.log("i am second function");
}
myfun1();
myfun2();
