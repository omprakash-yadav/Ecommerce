var xhr = new XMLHttpRequest()
xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        var t = JSON.parse(this.response);
        // for (let i = 0; i <= t.length; i++) {
        //     console.log(`
        //     contryname: ${t[i].name} 
        //     countryFlag: ${t[i].flag} `)
        // }
        return t.filter((curentValue) => {

            console.log(`Continent Region : ${curentValue.region}`)
        });
    } else {
        console.log("Data is not avalebal.")
    }

}
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
xhr.send();