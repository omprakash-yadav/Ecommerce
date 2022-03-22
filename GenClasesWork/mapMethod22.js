var employees = [
  {
    id: 101,
    name: "Lavish",
    Designation: "FSD",
  },
  {
    id: 102,
    name: "Swapnil",
    Designation: "SDE-2",
  },

  {
    id: 103,
    name: "Pavan",
    Designation: "Linux Adminstrator",
  },
  {
    id: 104,
    name: "Shiva",
    Designation: "SDE-1",
  },

  {
    id: 105,
    name: "Sai",
    Designation: "System Analyst",
  },
];

// Outpu:101,102,103,104,105
// forEach
//created an empty array
// var employeeid = [];

// employees.forEach(function (employee) {
//   employeeid.push(employee.id);
// });
// console.log(employeeid);

// Lets understand the same thing using map function
// 1.callback
// 2.optional=>this
// let employeeid = employees.map(function (data) {
//   return data.name;
// });

let Designation = employees.map((x) => x.Designation);
console.log(Designation);
