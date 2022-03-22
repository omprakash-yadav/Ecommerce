let btn = document.getElementById("btn");
let data = document.getElementById("apidata");

const url = "https://breakingbadapi.com/api/quote/random";
btn.addEventListener("click", async () => {
  try {
    const response = await fetch(url);
    const obj = await response.json();
    //console.log(obj[0]);
    data.innerHTML = `<div> Quote : ${obj[0].quote}</div>
    <div> Author:${obj[0].author}</div>`;
  } catch (err) {
    console.log(err);
  }
});
