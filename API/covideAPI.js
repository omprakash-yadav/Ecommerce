const url = "https://api.covid19api.com/summary";
fetch(url)
  .then((apidata) => {
    //console.log(apidata);
    return apidata.json();
  })
  .then((actualData) => {
    // console.log(actualData);
    // console.log(actualData.Countries[76]);
    // console.log(actualData.Countries[76].Country);
    // console.log(actualData.Countries[76].TotalConfirmed);
    // console.log(actualData.Countries[76].TotalDeaths);
    const realData = actualData.Countries[76];
    document.getElementById(
      "apiindia"
    ).innerHTML = `Country Name: ${realData.Country}
    <br>Total Confirmed: ${realData.TotalConfirmed}
    <br>Total Deaths: ${realData.TotalDeaths}
    <br>Total Recovered: ${realData.TotalRecovered}`;
  });
