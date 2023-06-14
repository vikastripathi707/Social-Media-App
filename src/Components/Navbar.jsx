import React from 'react'
import './Navbar.css'
import Logo from '../img/logo.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar shadow-sm bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand ms-5" to="/"><img src={Logo} alt="logo" height={"45px"} /></NavLink>
    <form className="d-flex me-md-5">
      <input className="form-control me-2 text-muted searchBox" type="search" placeholder="Search"  />
       <a href="#" className='nav-link text-dark fs-5 searchIcon'><i className="fa-solid fa-magnifying-glass"></i></a>
     <a href="#" className='nav-link text-dark fs-5'><i className="fa-sharp fa-solid fa-house" style={{color :"#000000"}}></i></a>
     <a href="#" className='nav-link text-dark fs-5'><i className="fa-regular fa-heart" style={{color :"#000000"}}></i></a>
      <div className="dropdown ms-1 fs-5">
    <a className="btn" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown">
                <img className="navbar-profile-pic" alt="profile pic" src="https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />

    </a>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <li> <NavLink to="/myprofile" className='nav-link text-dark '>Edit Post</NavLink></li>
      <li><a className="dropdown-item mt-0" href="#"> Logout </a></li>
    </ul>
  </div>
    
    </form>
  </div>
</nav>
</div>
  )
}

export default Navbar;