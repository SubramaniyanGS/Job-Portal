import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import './userSignup.css'

function UserSignup() {
    const [firstName,setFirstName]=useState();
    const [lastName,setLastName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [location,setLocation]=useState();
    const [role,setRole]=useState();
    const navigate=useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/app/v1/auth/register",{firstName,lastName,email,password,location,role})
        .then(result => {console.log(result)
        })
        .catch(err=>console.log(err))
    }

    const handleNavigate = ()=>{
        navigate('/userlogin');
    }
    
    return (
        <div className='usersignup template d-flex justify-content-center align-items-center w-100 vh-100'>
            <img className='image' src='C:/Users/subug/Downloads/pexels-fauxels-3184465.jpg'></img>
            <div className='form1 form_container  pt-3 pb-3 ps-5 pe-5 rounded bg-white'>
                <form onSubmit={handleSubmit}>
                    <h3 className='text-center sig '>Sign Up</h3>
                    <div className='row'>
                        <div className='col'>
                        <div className='mb-3 mt-3 form-floating '>
                            <input id='firstName' type='text' placeholder='Enter First Name' className='form-control mt-2' onChange={(e)=>setFirstName(e.target.value)}/>
                            <label htmlFor='firstName'>First Name</label>
                        </div>
                        </div>
                        <div className='col'>
                        <div className='mb-3 mt-3 form-floating'>
                            <input id='lastName' type='text' placeholder='Enter Last Name' className='form-control mt-2' onChange={(e)=>setLastName(e.target.value)} />
                            <label htmlFor='lastName'>Last Name</label>
                        </div>
                        </div>
                    </div>
                    <div className='mb-3 form-floating'>
                        <input id='email' type='email' placeholder='Enter Email' className='form-control mt-2' onChange={(e)=>setEmail(e.target.value)} />
                        <label htmlFor='email'>Email</label>
                    </div>
                    <div className='mb-3 form-floating'>
                        <input id='password' type='password' placeholder='Enter Password' className='form-control mt-2' onChange={(e)=>setPassword(e.target.value)} />
                        <label htmlFor='password'>Password</label>
                    </div>
                    <div className='mb-3 form-floating'>                      
                        <input id='location' type='text' placeholder='Enter Location' className='form-control mt-2' onChange={(e)=>setLocation(e.target.value)}/>
                        <label htmlFor='location'>Location</label>
                    </div>
                    <div className='mb-3 form-floating'>
                        <input id='role' type='text' placeholder='Enter Role' className='form-control mt-2' onChange={(e)=>setRole(e.target.value)} />
                        <label htmlFor='role'>Role</label>
                    </div>
                    <div className='d-grid'>
                        <button className='btn login-btn mt-2' onClick={handleNavigate}>Signup</button> 
                    </div>
                    <p className='text-end mt-2'>
                        Already Registered<Link to='/userlogin' className='ms-2'>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
export default UserSignup;
