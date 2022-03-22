document.body.style.fontFamily="monospace";
document.getElementById("adhar").innerHTML="25663252222";
document.getElementById("name").innerHTML="omprakash yadav";
document.getElementById("age").innerText="06/05/1997";
document.getElementById("email").innerHTML="Omprakash.yadav@gmail.com"
document.getElementById("city").innerHTML="Bihar"


//To add a image to this information using createEliment
//create a new emage and set the image sourse uri and append with the document


let imageElement=document.createElement("img");
//setting the image source url
imageElement.src="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg";
document.body.appendChild(imageElement)
