import './App.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Category from './components/Category';
import Employee from './components/Employee'; 
import Profile from './components/Profile';
import Logout from './components/Logout';
import AddCategory from './components/AddCategory';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Start from './components/Start';
import EmployeeLogin from './components/EmployeeLogin';
import EmployeeDetail from './components/EmployeeDetail';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/adminlogin" element={<Login />} />
      <Route path="/employee_login" element={<EmployeeLogin />} />
      <Route path='/employee_detail/:id' element={<EmployeeDetail/>}/>    
      <Route path="/dashboard" element={<Dashboard />}>
      <Route index element={<Home />} />          
      <Route path="category" element={<Category />} />
      <Route path="employee" element={<Employee />} />
      <Route path="profile" element={<Profile />} />
      <Route path="logout" element={<Logout />} />
      <Route path="add_category" element={<AddCategory />} />
      <Route path="add_employee" element={<AddEmployee />} />
      <Route path="edit_employee/:id" element={<EditEmployee />} /> 
      </Route>
    </Routes>
  )
}

export default App
