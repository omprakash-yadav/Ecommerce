const botal = {
    numberOfBotal: 1

}
botal.coler = "read";
botal.draw = function () { };
console.log(botal)
const another = Object.assign({ coler="BLUE" }, botal)
console.log(another)