const time = 1000;

function raiseDough(callback) {
  console.log("Wating for Dough");
  setTimeout(() => {
    console.log("Dough is redy");
    callback();
  }, 3 * time);
}
function rollDough(callback) {
  console.log("Rolling the dough");
  setTimeout(() => {
    console.log("Dough is Redy");
    callback();
  }, 2 * time);
}
function pouringSauce(callback) {
  console.log(" pourin sauce");
  setTimeout(() => {
    console.log("pourin sauce is done");
    callback();
  }, 1 * time);
}
function addToping(callback) {
  console.log("Adding toppings");
  setTimeout(() => {
    console.log("Toppings are redy");
    callback();
  }, 2 * time);
}

function backPizza(callback) {
  console.log("Beking the pizza");
  setTimeout(() => {
    console.log("Pizza is baked");
    callback();
  }, 5 * time);
}
function delliverPizza(callback) {
  console.log("Delivering the pizza");
  setTimeout(() => {
    console.log("Pizza is delivered");
    callback();
  }, 6 * time);
}

//callback hell
raiseDough(() => {
  rollDough(() => {
    pouringSauce(() => {
      addToping(() => {
        backPizza(() => {
          delliverPizza(() => {
            console.log("Pizza is delivered to customer");
          });
        });
      });
    });
  });
});
