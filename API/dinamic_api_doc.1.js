//function to creat a HTML element
function createNode(element) {
  return document.createElement(element);
}

//function that should append the element with parent

function append(parent, el) {
  return parent.appendChild(el);
  //The appendChild() method appends a node as the last child of a node.
}

const ul = document.getElementById("imglist");
const url = "https://randomuser.me/api/?results=100";
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let authors = data.results;
    //results => in the url arry collection of data objects
    return authors.map(function (author) {
      let list = createNode("li");
      let img = createNode("img");
      let span = createNode("span");
      img.src = author.picture.large;
      //The src property sets or returns the value of the src attribute of an image.
      //The required src attribute specifies the URL of an image.
      span.innerHTML = `${author.name.first} ${author.name.last}`;
      append(list, img);
      append(list, span);
      append(ul, list);
    });
  });
