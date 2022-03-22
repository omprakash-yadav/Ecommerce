function perstion(first, last, gender, age) {
    this.firstName = first;
    this.lastname = last;
    this.gender = gender;
    this.age = age

}
perstion.prototype.addres = "bettiah"
const intro = new perstion("omprakash", "yadav", "male", "23");
console.log(intro)