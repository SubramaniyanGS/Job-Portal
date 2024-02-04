import {Link} from 'react-router-dom';
import React,{useState} from 'react';
import {FaBars,FaTimes} from 'react-icons/fa'
import "./Navbar.css";

const Navbar = () => {

  const [icon,setIcon] = useState(false);

  const closeSideDrawer = () =>{
    setIcon(false)
  }

  const handleClick=()=>{
    setIcon(!icon)
  }

  return (
    <>
    <nav className='nav'>
      <Link to ='/home' className='nav-logo' onClick={closeSideDrawer}>
        <h3>JOB <span>PORTAL</span></h3>
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        {
          icon ? <FaTimes className='fa-Times' /> : <FaBars className='fa-bars' />
        }
      </div>
      <ul className={
        icon ? 'nav-menu-active' : 'nav-menu'
      }>
        <li>
          <Link to = '/home' className='nav-links' onClick={closeSideDrawer}>Home</Link>
        </li>
        <li>
          <Link to = '/jobs' className='nav-links' onClick={closeSideDrawer}>Jobs</Link>
        </li>
        <li>
          <Link to = '/companies' className='nav-links' onClick={closeSideDrawer}>Companies</Link>
        </li>
        <li>
          <Link to = '/contact' className='nav-links' onClick={closeSideDrawer}>Contact Us</Link>
        </li>
        <li>
          <Link to = '/profile' className='nav-links' onClick={closeSideDrawer}><img src="/user-1177568-1@2x.png" className='profile-logo'></img></Link>
        </li>
      </ul>
    </nav>
    </>
    
  );
};

export default Navbar;
