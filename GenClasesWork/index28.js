let oddNumber = (num) => {
    return num.filter((n) => {
        for (let i = 0; i < n; i++) {
            return (n % 2 !== 0)
        }
    });
}
let arr = [10, 41, 20, 44, 23, 47, 49, 53, 50, 97]
console.log(oddNumber(arr));