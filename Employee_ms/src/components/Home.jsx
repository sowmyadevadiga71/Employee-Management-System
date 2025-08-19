import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [adminTotal, setAdminTotal] = useState(0);
  const [employeeTotal, setemployeeTotal] = useState(0);
  const [salaryTotal, setSalaryTotal] = useState(0);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    adminCount();
    employeeCount();
    salaryCount();
    AdminRecords();
  }, []);

  const AdminRecords = () => {
    axios.get("http://localhost:3000/auth/admin_records").then((result) => {
      if (result.data.Status) {
        setAdmins(result.data.Result);
      } else {
        alert(result.data.Error);
      }
    });
  };

  const adminCount = () => {
    axios.get("http://localhost:3000/auth/admin_count").then((result) => {
      if (result.data.Status) {
        setAdminTotal(result.data.Result[0].admin);
      }
    });
  };

  const employeeCount = () => {
    axios.get("http://localhost:3000/auth/employee_count").then((result) => {
      if (result.data.Status) {
        setemployeeTotal(result.data.Result[0].employee);
      }
    });
  };

  const salaryCount = () => {
    axios.get("http://localhost:3000/auth/salary_count").then((result) => {
      if (result.data.Status) {
        setSalaryTotal(result.data.Result[0].salaryOFEmp);
      } else {
        alert(result.data.Error);
      }
    });
  };

  return (
    <div className="p-4">
      {/* Summary Cards */}
      <div className="row g-4 mb-5 text-white">
        {/* Admin Box */}
        <div className="col-md-4">
          <div
            className="card rounded-4 p-4"
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6>Admins</h6>
                <h2>{adminTotal}</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Box */}
        <div className="col-md-4">
          <div
            className="card rounded-4 p-4"
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6>Employees</h6>
                <h2>{employeeTotal}</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Salary Box */}
        <div className="col-md-4">
          <div
            className="card rounded-4 p-4"
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6>Salary</h6>
                <h2>${salaryTotal}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Admins Table */}
      <div>
        <h4 className="mb-3">List of Admins</h4>
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle rounded-3 bg-white shadow-sm">
            <thead className="table-dark">
              <tr>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((a) => (
                <tr key={a.email}>
                  <td>{a.email}</td>
                  <td>
                    <button className="btn btn-info btn-sm me-2">Edit</button>
                    <button className="btn btn-warning btn-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
