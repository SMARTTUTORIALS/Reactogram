import React from 'react'

import './signup.css';
import '../App.css';

import socialDesktop from '../image/social-desktop.PNG';
import socialMobile from '../image/social-mobile.PNG';
import { Link } from 'react-router-dom';


const Signup = () => {
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-7 col-sm-12 d-flex justify-content-center">
                    <img alt="desktop logo"  className="social-desktop-img" style={{ height: '80%' }} src={socialDesktop} />
                    <img alt="mobile logo"  className="social-mobile-img" src={socialMobile} />
                </div>
                <div className="col-md-5 col-sm-12">
                    <div className="card shadow mt-5" >
                        <div className="card-body px-5">
                            <h4 className="font-default card-title text-center mt-3 fw-bold">Sign Up</h4>

                            <form>
                                <input type="tel" className="font-default p-2 mt-4 mb-2 form-control input-bg" placeholder='IN +91 000-000-0000' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />

                                <input type="email" className="font-default p-2 mb-2 form-control input-bg" placeholder='Email' />
                                <input type="text" className="font-default p-2 mb-2 form-control input-bg" placeholder='Full Name' />
                                <input type="password" className="font-default p-2 mb-2 form-control input-bg" placeholder='Password' />

                                <div className="form-check mt-4 mb-2">
                                    <input className="form-check-input" type="checkbox" value="" id="remember-me" />
                                        <label className="form-check-label text-muted" htmlFor="remember-me">
                                            Remember Password
                                        </label>
                                </div>

                                <div className='d-grid'>
                                    <button type="submit" className="font-default custom-btn custom-btn-blue fw-bold fs-6">Sign Up</button>
                                </div>
                                <div className='my-4 d-sm-flex flex-sm-row'>
                                    <hr className='text-muted col-md-5 col-sm-2' />
                                    <h6 className='text-muted col-md-2 col-sm-2 text-center'>OR</h6>
                                    <hr className='text-muted col-md-5 col-sm-2' />
                                </div>
                                <div className='mt-3 mb-5 d-grid'>
                                    <button type="submit" className="font-default custom-btn custom-btn-white p-2">
                                        <span className="text-muted fs-6">Already have an account?</span>
                                        <Link to="/login" className="ms-1 text-info fw-bold">Log In</Link>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup