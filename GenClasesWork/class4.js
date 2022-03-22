class Calc {
    getMin(...data) {
        if (data.length === 0) {
            return 0;
        }
        function compare(a, b) {
            return b - a
        }
        return data.sort(compare);
        //console.log(data[0])

    }
}
let obj = new Calc();
let min = obj.getMin(3, 2, 1, 4, 5);
console.log(min[0])