//set attribute which will change navbar to top navigation
let parent = document.getElementById("navBar");
parent.setAttribute("id", "topnavigation");
let element = document.createElement("li");
let textnode = document.createTextNode("Technology We use");
element.appendChild(textnode);
parent.firstElementChild.appendChild(element);
var elementUL = document.getElementById("topnavigation").firstElementChild;
//get the hold of first and last choldlet 
 let first = elementUL.firstElementChild;
let last = elementUL.lastElementChild;
document.write(first.firstChild.firstChild.nodeValue + "<br>");
document.write(last.firstChild.nodeValue + "<br>");