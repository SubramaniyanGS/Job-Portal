import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import './employerSignup.css'

function EmployerSignup() {
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
        navigate('/employerlogin');
    }
    
    return (
        <div className='employersignup template d-flex justify-content-center align-items-center w-100 vh-100'>
            <div className='form1 form_container  pt-3 pb-3 ps-5 pe-5 rounded bg-white'>
                <form onSubmit={handleSubmit}>
                    <h3 className='text-center company'>Company Sign Up</h3>
                    <div className='row'>
                      <div className='col'>
                        <div className='mb-3 mt-3 form-floating '>
                            <input id='companyName' type='text' placeholder='company Name' className='form-control mt-2' onChange={(e)=>setFirstName(e.target.value)}/>
                            <label htmlFor='companyName'>Company Name</label>
                        </div>
                      </div>  
                      <div className='col'>
                        <div className='mb-3 mt-3 form-floating'>                      
                            <input id='location' type='text' placeholder='Enter Location' className='form-control mt-2' onChange={(e)=>setLocation(e.target.value)}/>
                            <label htmlFor='location'>Location</label>
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
                    <div className='mb-3'>
                        <textarea name="" id="" cols="25" rows="2" class="form-control" placeholder='Company Description'></textarea>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <div className='mb-3 form-floating'>
                            <input id='numberOfEmployees' type='number' placeholder='numberOfEmployees' className='form-control mt-2' onChange={(e)=>setRole(e.target.value)} />
                            <label htmlFor='numberOfEmployees'>Employees</label>
                        </div>
                      </div>  
                      <div className='col'>
                        <div className='mb-3 form-floating'>                      
                            <input id='industry' type='text' placeholder='Industry' className='form-control mt-2' onChange={(e)=>setLocation(e.target.value)}/>
                            <label htmlFor='industry'>Industry</label>
                        </div>
                      </div>  
                    </div>  
                    <div className='mb-3 form-floating'>                      
                            <input id='contactInfo' type='text' placeholder='contactInfo' className='form-control mt-2' onChange={(e)=>setLocation(e.target.value)}/>
                            <label htmlFor='contactInfo'>Contact Info</label>
                        </div>  
                    <div className='d-grid'>
                        <button className='btn login-btn mt-2' onClick={handleNavigate}>Signup</button> 
                    </div>
                    <p className='text-end mt-2'>
                        Already Registered<Link to='/employerlogin' className='ms-2'>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default EmployerSignup