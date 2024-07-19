import React, { useState, useEffect } from "react";
import { DeleteEmployee, listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const [employee, setEmployee] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    listEmployees()
      .then((reponse) => {
        setEmployee(reponse.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [employee]);

  function UpdatEmployee(id){
    Navigate(`/edit-employee/${id}`)
  }
  function removeEmployee(id) {
    DeleteEmployee(id).then((res)=>{
        console.log(res.data);
        alert("Employee Deleted Successfully !")
    }).catch((error)=>{
        console.log(error);
    })
  }

  return (
    <div className="container">
      <h2 className="text-center mt-3">List of Employees</h2>
      <button className="btn btn-info mb-3" onClick={()=>Navigate("/add-employee")}>
        + Add Employee{" "}
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-scrollable">
          {employee.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td><button className="btn btn-dark me-2" onClick={()=>{UpdatEmployee(employee.id)}}>Update</button>
              <button className="btn btn-danger" onClick={()=>{removeEmployee(employee.id)}}>Delete</button></td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
