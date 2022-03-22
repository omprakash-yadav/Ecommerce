const circle = {
    radias: 4,
    draw() {
        console.log("draw");
    }
};
const a = Object.assign({
    coller: "read"
}, circle);
console.log(a);
//const another1 = { ...circle };
//console.log(another1)