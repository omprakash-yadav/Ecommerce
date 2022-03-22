let addresh = {
    street: "=>bommanhali",
    city: "=>Banglore",
    zipCode: "=>50068"
};
function shoAddresh(addresh) {
    for (let key in addresh)
        console.log(key, addresh[key]);


}
shoAddresh(addresh);