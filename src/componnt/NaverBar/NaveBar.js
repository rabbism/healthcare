import React from 'react';
import { Link } from 'react-router-dom';
import './NaveBar.css'
import logo from '../../images/logo.png'
import useAuth from '../Hooks/useAuth';

const NaveBar = () => {
  const {user,logOut} =useAuth()
    return (
        <div className='nave-bar-style'>
          <nav className="navbar navbar-expand-lg navbar-light p-3 w-75 m-auto">
        <div className="container-fluid">
    <Link to='/home' className="navbar-brand"><img src={logo} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav nav-pills">
        <li className="nav-item">
          <Link to='/home' className="nav-link" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/service' className="nav-link" >Service</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link">About</Link>
        </li>
        <li className="nav-item ">
          {user.email ? <button onClick={logOut} className='btn btn-primary mt-1'>Log Out</button>
          :<Link to='/login' className="nav-link active text-white" aria-current="page" >Sign Up</Link>
          }
          
        </li>
        <li className="nav-item ">
          {user.email && <Link className="nav-link">Hello {user.displayName}</Link>}
        </li>
    
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default NaveBar;