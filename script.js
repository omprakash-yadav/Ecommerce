let button = document.getElementById("btn");
button.addEventListener("click", function () {
  //logic
  let words = document.getElementById("string").value;
  let count = words.length;

  let outputDivEliment = document.getElementById("output");
  outputDivEliment.innerHTML = `The length of the word is: ${count}`;
});
