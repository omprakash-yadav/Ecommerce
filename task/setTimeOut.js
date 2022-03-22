let count = 10;

let counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer () {
  count = count - 1;
  if (count <= 0) {
    clearInterval(counter);
    //counter ended, do something here
    return;
  }
  document.getElementById("timer").innerHTML = count + " secs"; // watch for spelling
};
//timers();
// let display_information = () => {
//   timers();
//   //document.getElementById("show").innerHTML = console.log("hello");
// };
// display_information();
