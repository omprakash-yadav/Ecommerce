document.getElementById("btn").addEventListener("click", getdata);
//lets criate the function to get  data from the api
function getdata() {
  fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      //display the data in the list

      let outputs = "";
      data.forEach((element) => {
        outputs += `
         <li>${element.login}</li>
         <li>${element.avatar_url}</li>
         `;
      });
      document.getElementById("output").innerHTML = outputs;
    })
    .catch((err) => {
      document.getElementById("output").innerHTML = err;
    });
}
