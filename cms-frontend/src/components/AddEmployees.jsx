import React, { useEffect, useState } from "react";
import {
  createEmployee,
  getEmployee,
  UpdateEmployee,
} from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const AddEmployees = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((res) => {
          setFirstName(res.data.firstName);
          setLastName(res.data.lastName);
          setEmail(res.data.email);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    const employee = { firstName, lastName, email };
    if (validateForm()) {
      if (id) {
        UpdateEmployee(id, employee)
          .then((res) => {
            console.log(res.data);
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        createEmployee(employee)
          .then((response) => {
            console.log(response.data);
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;
    const errosCopy = { ...errors };

    if (firstName.trim()) {
      errosCopy.firstName = "";
    } else {
      errosCopy.firstName = "First Name is Required!";
      valid = false;
    }
    if (lastName.trim()) {
      errosCopy.lastName = "";
    } else {
      errosCopy.lastName = "Last Name is Required!";
      valid = false;
    }
    if (email.trim()) {
      errosCopy.email = "";
    } else {
      errosCopy.email = "Email is Required!";
      valid = false;
    }
    setErrors(errosCopy);
    return valid;
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center mt-3">
            {id ? "Update Employee" : " Add Employee"}
          </h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  placeholder="Enter Employee First Name"
                  name="firstname"
                  value={firstName}
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Employee Last Name"
                  name="lastName"
                  value={lastName}
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
                {errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
                <label className="form-label">Email</label>
                <input
                  type="email"
                  placeholder="Enter Employee Email"
                  name="email"
                  value={email}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <button
                className="btn btn-success"
                onClick={saveOrUpdateEmployee}
              >
                {id ? "Update" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployees;
