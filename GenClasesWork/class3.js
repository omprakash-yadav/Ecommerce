class Calc {

    getAvrage(...data) {
        if (data.length === 0) {
            return 0;
        }
        let sum = 0;
        for (let i = 0; i <= data.length; i++) {
            if (data.hasOwnProperty(i)) {
                sum += data[i]
            }
        }
        return sum / data.length;

    }
}
let obj = new Calc()
let average = obj.getAvrage(1, 2, 3, 4, 5)
console.log(average);
