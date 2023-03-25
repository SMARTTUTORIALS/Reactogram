import React from 'react'

import '../App.css';
import './navbar.css';

import logo from '../image/logo.PNG';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light shadow">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand ms-md-5 ms-sm-1"><img className='navbar-brand-img' src={logo} alt="app logo" /></NavLink>
                    <form className="d-flex me-md-5 me-sm-1" role="search">
                        <input className="search-box form-control me-2 text-muted" type="search" placeholder="Search" aria-label="Search" />
                        <a className="nav-link navbar-search-icon m-2 pe-2 text-dark fs-5" href="#"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></a>
                        <a className="nav-link m-2 pe-2 text-dark fs-5" href="#"><i class="fa-sharp fa-solid fa-house"></i></a>
                        <a className="nav-link m-2 pe-2 text-dark fs-5" href="#"><i class="fa-sharp fa-regular fa-heart"></i></a>
                        <NavLink className="nav-link m-2 text-dark fs-5" to="/myprofile"><i class="fa-sharp fa-regular fa-circle fa-xl"></i></NavLink>
                    </form>

                </div>
            </nav>
        </div>
    )
}

export default NavBar;