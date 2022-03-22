let button=document.getElementById("counts");
button.addEventListener("click",function(){
  let word =  document.getElementById("text-word").value;
  let count=word.length;
   let outDivEliment=document.getElementById("output");
   outDivEliment.innerHTML=`The length of the word is : ${count}`
})