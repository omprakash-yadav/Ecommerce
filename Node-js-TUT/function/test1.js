function creatCircle(radias) {
    return {
        radias,
        draw() {
            console.log("drow")
        }
    };


}
//const circle1 = creatCircle(1);
console.log(creatCircle(2))