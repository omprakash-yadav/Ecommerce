let button = document.getElementById("btn");
button.addEventListener("click", function () {
  let word = document.getElementById("str").value;
  let count = word.length;

  let outDivEliment = document.getElementById("output");
  outDivEliment.innerHTML = `The length of the word is: ${count}`;
});
