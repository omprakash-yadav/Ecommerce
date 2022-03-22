
function showMenu({ title, width, Height, item }) {
    return ` ${title} ${width} ${Height}
    ${item} `
};
let myshop = {
    title: "My Menu",
    width: 100,
    Height: 200,
    item: ["Item1", "Item2", "item3", "Item4"]
}
console.log(showMenu(myshop))