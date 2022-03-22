let employees = [
    {
      id: 1,
      first_name: "Sourav",
      last_name: "Das",
      email: "saurav@gmail.com",
      gender: "Male",
      ip_address: "192.178.13.21",
    },
    {
      id: 2,
      first_name: "Pavan",
      last_name: "Bhosale",
      email: "pavan@gmail.com",
      gender: "Male",
      ip_address: "192.178.23.21",
    },
    {
      id: 3,
      first_name: "Sangeetha",
      last_name: "Paul",
      email: "sangeetha@gmail.com",
      gender: "Female",
      ip_address: "192.178.43.21",
    },
  
    {
      id: 4,
      first_name: "Pavni",
      last_name: "Dhillon",
      email: "pavni@gmail.com",
      gender: "Female",
      ip_address: "192.278.43.21",
    },
    {
      id: 5,
      first_name: "Vigneshwaran",
      last_name: "RV",
      email: "rv@gmail.com",
      gender: "Male",
      ip_address: "192.178.43.21",
    },
  
    {
      id: 6,
      first_name: "Aishwarya",
      last_name: "Halur",
      email: "Aaish@gmail.com",
      gender: "Female",
      ip_address: "192.178.43.21",
    },
  ];

  //all employees hold

  let allEmpButton=document.querySelector("#all-emp-btn");
  allEmpButton.addEventListener("click",function(){
      displayEmployees(employees)

  });
  //To get Male employee
  let maleEmpButton=document.querySelector("#male-emp-btn");
  maleEmpButton.addEventListener("click",function(){
     let maleEmployee= employees.filter(function(employee){
          return employee.gender ==="Male";
      })
      displayEmployees(maleEmployee);
  });
  //To get Female employee
  let femaleEmpButton=document.querySelector("#female-emp-btn");
  femaleEmpButton.addEventListener("click",function(){
      let femaleEmployee=employees.filter(function(employee){
          return employee.gender==="Female"

      });
      displayEmployees(femaleEmployee)
  });
  //search functionality
  let searchBox=document.querySelector("#search-box");
  searchBox.addEventListener("keyup",function(){
      let textEntered=searchBox.value;
      let filteredEmployee=[];
      if(textEntered !== ""){
          filteredEmployee=employees.filter(function(employee){
              return employee.first_name.toUpperCase().startsWith(textEntered.toUpperCase());

          });
          //console.log(filteredEmployee)
          document.querySelector("#table-body").innerHTML="";
          displayEmployees(filteredEmployee)
      }else{
        document.querySelector("#table-body").innerHTML="";

      }

  });

  //create a functionality to display the data
  let displayEmployees=(employees)=>{
      let tableBody=document.querySelector("#table-body")
      let tableRow="";
      for( let employee of employees){
          tableRow +=`<tr>
          <td>${employee.id}</td>
          <td>${employee.first_name}</td>
          <td>${employee.last_name}</td>
          <td>${employee.email}</td>
          <td>${employee.gender}</td>
          <td>${employee.ip_address}</td>
        </tr>`;
          tableBody.innerHTML=tableRow;
        }
     };