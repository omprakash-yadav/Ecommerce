function addNew(){
    let selectlist=document.getElementById("list");
    //creat  a new option element
    let newOption=document.createElement("option")

    //select the input from the input box and add it to dropdown list
    let newOptionText= document.getElementById("textbox").value
     newOption.text=newOptionText;
     selectlist.append(newOption)
}