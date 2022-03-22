// chicken curry
let rawchicken = "5kg chicken";
let masala = "pepper+garlic+salt+tumaric";
let marinatedChicken = glassBowl(rawchicken, masala);

let water = "3ltr water";
let coockedChicken = cookingBowl(marinatedChicken, water);

let rice = "3kg rice";


eatingPlate(coockedChicken, rice);
//mixing the items =>rawchicken +masala
function glassBowl(rawchicken, masala) {
    //mixing logic
    let marinatedChicken = `Mixing ${rawchicken} + ${masala}`;
    return marinatedChicken;
}

//marinated chicken+water
function cookingBowl(marinatedChicken, water) {
    //coocking the chicken
    let coockedChicken = `Cooking ${marinatedChicken} + ${water}`;
    return coockedChicken;
}

// coocked chicken+rice+chapati
function eatingPlate(coockedChicken, rice) {
    console.log(`Eating : ${coockedChicken} with  ${rice}`);
}
