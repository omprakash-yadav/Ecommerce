var xhr = new XMLHttpRequest();
xhr.onload = function () {
    if (xhr.status >= 200 && this.status < 300) {
        var t = JSON.parse(this.response);
        for (let i = 0; i < t.length; i++) {
            console.log(`
            country:${t[i].name}
            population:${t[i].population}
            region:${t[i].region}
            Subregion:${t[i].subregion}
            currency:${t[i].currencies[0].code}
            `)
        }
        //console.log(t)
    } else {
        console.log("Data is not avalable")
    }

}
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
xhr.send();