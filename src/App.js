import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/Main/Main';
import UserLogin from './pages/Login/Users/userLogin';
import UserSignup from './pages/Login/Users/userSignup';
import Adminlogin from './pages/Login/Admin/Adminlogin';
import EmployerLogin from './pages/Login/Employers/EmployerLogin';
import EmployerSignup from './pages/Login/Employers/EmployerSignup';
import Navbar from './components/Navbar/Navbar';
import Shownavbar from './components/Navbar/Shownavbar';
import Home from './pages/Home/Home';
import Jobs from './pages/Jobs/Jobs';
import Companies from './pages/Companies/Companies';
import Contact from './pages/Contact/Contact';
import Profile from './pages/Profile/Profile';
import Footer from './components/Footer/Footer';
import Showfooter from './components/Footer/Showfooter';

function App() {

  return (
    <Router>
      <Shownavbar>
      <Navbar />
      </Shownavbar>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/adminlogin' element={<Adminlogin/>} />
        <Route path='/employerlogin' element={<EmployerLogin/>} />
        <Route path='/employersignup' element={<EmployerSignup/>} />
        <Route path='/userlogin' element={<UserLogin/>} />
        <Route path='/usersignup' element={<UserSignup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Showfooter>
      <Footer />
      </Showfooter>
    </Router>
  );
}

export default App;

