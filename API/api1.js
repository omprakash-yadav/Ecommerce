//promise channing
// const url =
//   "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json";
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     //get the data from api
//     console.log(data);
//   })
//   .catch((err) => console.log(err));


const  url="https://api.covid19api.com/summary";
fetch(url)
.then((response) => response.json())
  .then((data) => {
    //get the data from api
    console.log(data.Countries[76].Country);
  })
  .catch((err) => console.log(err));