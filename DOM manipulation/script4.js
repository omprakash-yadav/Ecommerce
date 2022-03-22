function insert_Row(){
    let x=document.getElementById("sampleTable").insertRow(0);
    let y=x.insertCell(0);
    let z=x.insertCell(1);

    y.innerHTML="New Row-1st cell";
    z.innerHTML="New Row=2nd cell";
}