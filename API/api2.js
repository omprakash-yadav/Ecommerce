const url = "https://api.covid19api.com/summary";

const fatchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    //logic
    console.log(countries);
  } catch (err) {
    console.log(err);
  }
};
fatchData();
