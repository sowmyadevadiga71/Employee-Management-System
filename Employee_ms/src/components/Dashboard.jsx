import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleLogout = () => {
    axios.get("http://localhost:3000/auth/logout").then((result) => {
      if (result.data.Status) {
        navigate("/");
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        {/* Sidebar */}
        <div className="col-auto col-md-3 col-xl-2 px-0 bg-secondary min-vh-100">
          <div className="d-flex flex-column align-items-center align-items-sm-start text-white p-3">
            {/* Brand */}
            <Link
              to="/dashboard"
              className="d-flex align-items-center pb-3 mb-3 text-white text-decoration-none"
            >
              <span className="fs-5 fw-bold d-none d-sm-inline">
                ManageMate
              </span>
            </Link>

            {/* Menu */}
            <ul className="nav nav-pills flex-column w-100">
              <li className="nav-item w-100 mb-1">
                <Link
                  to="/dashboard"
                  className="nav-link text-white px-3 py-2 rounded d-flex align-items-center bg-secondary bg-opacity-10"
                >
                  <i className="fs-4 bi-speedometer2 me-2"></i>
                  <span className="d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item w-100 mb-1">
                <Link
                  to="/dashboard/employee"
                  className="nav-link text-white px-3 py-2 rounded d-flex align-items-center bg-secondary bg-opacity-10"
                >
                  <i className="fs-4 bi-people me-2"></i>
                  <span className="d-none d-sm-inline">Manage Employees</span>
                </Link>
              </li>
              <li className="nav-item w-100 mb-1">
                <Link
                  to="/dashboard/category"
                  className="nav-link text-white px-3 py-2 rounded d-flex align-items-center bg-secondary bg-opacity-10"
                >
                  <i className="fs-4 bi-columns me-2"></i>
                  <span className="d-none d-sm-inline">Category</span>
                </Link>
              </li>
              <li className="nav-item w-100 mb-1">
                <Link
                  to="/dashboard/profile"
                  className="nav-link text-white px-3 py-2 rounded d-flex align-items-center bg-secondary bg-opacity-10"
                >
                  <i className="fs-4 bi-person me-2"></i>
                  <span className="d-none d-sm-inline">Profile</span>
                </Link>
              </li>

              {/* Logout */}
              <li className="nav-item w-100 mt-auto">
                <button
                  onClick={handleLogout}
                  className="btn btn-danger w-100 d-flex align-items-center justify-content-center"
                >
                  <i className="fs-4 bi-power me-2"></i>
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="col p-0">
          {/* Header */}
          <div className="p-3 bg-light shadow-sm border-bottom text-center">
            <h4 className="m-0">Employee Management System</h4>
          </div>

          {/* Outlet */}
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
