let Resume = [{
    Name: "omprakash yadav",
    Age: 23,
    Collage: "Bharath University",
    PassingYear: 2019,
    Stream: "CSE",
    ParsentAddress: "Bommanhali Bangalore",

}];
for (let key of Resume) {
    console.log(`
    Name : ${key.Name}
    Age : ${key.Age}
    Collage : ${key.Collage}
    passingYear : ${key.PassingYear}
    Stream : ${key.Stream}
    LarsentAdres : ${key.ParsentAddress}`);
}