import React from 'react'

import '../App.css';
import './navbar.css';

import logo from '../image/logo.PNG';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar bg-light shadow">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand ms-5"><img src={logo} style={{ height: '3rem' }} alt="app logo" /></Link>
                    <form className="d-flex me-5" role="search">
                        <input className="search-box form-control me-2 text-muted" type="search" placeholder="Search" aria-label="Search" />
                        <a className="nav-link m-2 pe-2 text-dark fs-5" href="#"><i class="fa-sharp fa-solid fa-house"></i></a>
                        <a className="nav-link m-2 pe-2 text-dark fs-5" href="#"><i class="fa-sharp fa-regular fa-heart"></i></a>
                        <a className="nav-link m-2 text-dark fs-5" href="#"><i class="fa-sharp fa-regular fa-circle fa-2xl"></i></a>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;