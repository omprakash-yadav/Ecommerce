import React from "react";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

function AllStudents(props) {
  let handleDelet = (index) => {
    let newArry = [...props.data.students]
    console.log(newArry)
    newArry.splice(index, 1);
    props.data.setStudent(newArry)

  }

  return <div>
    <Table striped bordered hover responsive="sm" >
      <thead>
        <tr>
          <th>Sr.no.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile Number</th>
          <th>Batch</th>
        </tr>
      </thead>
      <tbody>
        {
          props.data.students.map((eliment, index) => {
            return <tr key={index}>
              <td>{index}</td>
              <td>{eliment.name}</td>
              <td>{eliment.email}</td>
              <td>{eliment.mobile}</td>
              <td>{eliment.Batch}</td>
              <td><Button variant="danger" onClick={() => handleDelet(index)}>Delet</Button><span>&nbsp;</span>
                <Link to={`/edit-student/${index}`}><Button variant="warning">Adit</Button></Link>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
  </div>;
}

export default AllStudents;
