let btn = document.querySelector("#btn");
let pics = document.querySelector("#photo");

btn.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    //.then(handleFetchError)
    .then((response) => response.json())
    .then((data) => {
      pics.src = data.message;
    })
    .catch((err) => {
      console.log(err);
    });
});
