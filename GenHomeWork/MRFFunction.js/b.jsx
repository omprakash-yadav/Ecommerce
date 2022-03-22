var xhr = new XMLHttpRequest()
xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        var t = JSON.parse(this.response);
        return t.filter((curentValue) => {
            if (curentValue.population <= 200000)

                console.log(`Population : ${curentValue.population}`)
        });
    } else {
        console.log("Data is not avalebal.")
    }

}
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
xhr.send();