import React from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate=useNavigate();


    const handleAdminPage = () =>{
        navigate('/adminlogin');
    }
    const handleEmployerPage = () =>{
        navigate('/employerlogin');
    }
    const handleUserPage = () =>{
        navigate('/userlogin');
    }
  return (
    <div>
        <h1>Welcom to Job Portal</h1>
        <div className='buttons d-flex align-items-center justify-content-space-between'>
            <button className='btn btn-primary m-5' onClick={handleAdminPage}>Admin</button>
            <button className='btn btn-primary m-5' onClick={handleEmployerPage}>Employer</button>
            <button className='btn btn-primary m-5'onClick={handleUserPage}>User</button>
        </div>
    </div>
  )
}

export default Main