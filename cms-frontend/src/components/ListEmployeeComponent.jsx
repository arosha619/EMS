import React from "react";

const ListEmployeeComponent = () => {
  const dummyData = [
    {
      id: 1,
      firstName: "arosha",
      lastName: "Sandaruwan",
      email: "arosha@gmail.com",
    },
    {
      id: 2,
      firstName: "randika",
      lastName: "Sandaruwan",
      email: "arosharandika@gmail.com",
    },
    {
      id: 3,
      firstName: "kamal",
      lastName: "Sandaruwan",
      email: "kamal@gmail.com",
    },
  ];
  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Id</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
