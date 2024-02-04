import React from 'react';
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';

const Showfooter=({children})=> {

    const location=useLocation();

    const [showFooter,setShowFooter]=useState(false);
     
    useEffect(()=>{
        if(location.pathname === '/' ||
        location.pathname === '/userlogin' ||
        location.pathname === '/usersignup' ||
        location.pathname === '/employerlogin' ||
        location.pathname === '/employersignup' ||
        location.pathname === '/adminlogin'){
            setShowFooter(false);
        }else{
            setShowFooter(true);
        }
    },[location])   
  return (
    <div>{showFooter && children}</div>
  )
}

export default Showfooter;