let arry = [10, 20, 10, 30, 10, 10, 10, 50];
// reduce
// 1.Get the number which occurs more than one time using reduce mathod
//2. addition of total numbe 
let totalNumber = arry.reduce((sum, n) => {
    return sum + n;
});
console.log(totalNumber)

