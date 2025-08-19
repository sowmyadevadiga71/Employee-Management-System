import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:3000/verify")
      .then((result) => {
        if (result.data.Status) {
          if (result.data.role === "admin") {
            navigate("/dashboard");
          } else {
            navigate("/employee_detail/" + result.data.id);
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center loginPage text-white">
      {/* Title Section */}
      <h1 className="mb-4 text-center shadow-sm p-3 rounded"
      style={{ fontSize: "3rem" }}>
        Employee Management System
      </h1>

      {/* Buttons Section as One Box with limited width */}
      <div
        className="p-4 rounded shadow-sm d-flex flex-column align-items-center mx-auto"
        style={{
          backgroundColor: "rgba(109, 105, 105, 0.1)",
          width: "22rem",
        }}
      >
        <p
          className="mb-4 text-center"
          style={{ padding: "1rem", borderRadius: "0.5rem" }}
        >
          Welcome! Select your role to login
        </p>

        <div className="d-flex justify-content-between w-100">
          <button
            type="button"
            className="btn btn-success btn-lg"
            onClick={() => navigate("/adminlogin")}
          >
            Admin
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => navigate("/employee_login")}
          >
            Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
