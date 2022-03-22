//select attribute which change navbar to top navigation
let parent=document.getElementById("navBar");
//Sets the value of element's first attribute whose qualified name is qualifiedName to value.
parent.setAttribute("id","topnavigation");

let element=document.createElement("li");
let textnode=document.createTextNode("Tecnology we use");

element.appendChild(textnode);
parent.firstElementChild.appendChild(element)

var ul=document.getElementById("topnavigation").firstElementChild;

//get the hold of first and last child

let first=ul.firstElementChild;
let last=ul.lastElementChild;
document.write(first.firstChild.firstChild.nodeValue + "<br>");
document.write(last.firstChild.nodeValue + "<br>")