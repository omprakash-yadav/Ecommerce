function add(){
    let num1=document.getElementById("first").value;
    let num2=document.getElementById("second").value;

    let result= Number(num1) + Number(num2)
    //use selector by class name
    document.getElementsByClassName("output")[0].innerHTML=" Addition is : " + result;

}

function sub(){
    let num1=document.getElementById("first").value;
    let num2=document.getElementById("second").value

    let result=Number(num1) - Number(num2);

    document.getElementsByClassName("output")[0].innerHTML=" Subtraction is :" + result
}
function mul(){
    let num1=document.getElementById("first").value;
    let num2=document.getElementById("second").value

    let result=Number(num1) * Number(num2);

    document.getElementsByClassName("output")[0].innerHTML=" Multiplication is :" + result
}
function div(){
    let num1=document.getElementById("first").value;
    let num2=document.getElementById("second").value

    let result=Number(num1) %  Number(num2);

    document.getElementsByClassName("output")[0].innerHTML=" Divition is :" + result
}