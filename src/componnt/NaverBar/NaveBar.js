import React from 'react';
import { Link } from 'react-router-dom';
import './NaveBar.css'
import logo from '../../images/logo.png'

const NaveBar = () => {
    return (
        <div className='nave-bar-style'>
           <nav className="navbar navbar-expand-lg navbar-light  p-3">
        <div className="container-fluid">
    <Link to='/home' className="navbar-brand" href="#"><img src={logo} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/home' className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/service' className="nav-link" href="#">Service</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default NaveBar;