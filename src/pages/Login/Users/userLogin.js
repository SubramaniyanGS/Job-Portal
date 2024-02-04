import React, { useState } from 'react';
import './userLogin.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";

function UserLogin() {

    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/app/v1/auth/login",{email,password})
        .then(result => {console.log(result)
        })
        .catch(err=>console.log(err))
    }

    const handleNavigate = ()=>{
        navigate('/home');
    }
  return (
    <div className='userlogin template d-flex justify-content-center align-items-center 100-w vh-100'>
        <div className='form_container pt-3 pb-3 ps-5 pe-5 rounded bg-white'>
        <form onSubmit={handleSubmit}>
            <h3 className='text-center log'>Login</h3>
            <div className=' mt-3 mb-3 form-floating'>
                <input type='email' placeholder='Enter email' className='form-control' onChange={(e)=>setEmail(e.target.value)} />
                <label htmlFor='email'>Enter Email</label>
            </div>
            <div className='mb-3 form-floating'>               
                <input type='password' placeholder='Enter password' className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
                <label htmlFor='password'>Enter Password</label>
            </div>
            <div className='mb-3'>
                <input type='checkbox' className='custom-control custom-checkbox' id='check' />
                <label htmlFor='check' className='custom-inout-label'>Remeber me</label>
            </div>
            <div className='d-grid'>
                <button className='btn login-btn' onClick={handleNavigate}>Login</button>
            </div>
            <p className='text-end mt-2'>
                Forget <a href=''>Password</a><Link to='/usersignup' className='ms-2'>Signup</Link>
            </p>
        </form>
        </div>
    </div>
  )
}

export default UserLogin;