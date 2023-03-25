import React from 'react';
import '../App.css';
import './Card.css';

function Card() {
    return (
        <div className="card shadow-sm col-md-4 m-1" >
            <div className='card-body px-2'>
                <div className='row'>
                    <div className='col-6 d-flex'>
                        <img className="rounded-circle img-profile-pic p-2" alt="profile pic" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80" />
                        <div className='d-flex flex-column justify-content-center mt-2'>
                            <p className='fs-6 fw-bold ms-1'>Title</p>
                            <p className='profile-description'>Description</p>
                        </div>
                    </div>
                    <div className='col-6 dropdown'>


                        <button className='btn float-end w-25' data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-ellipsis-vertical" />
                        </button>

                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <a className="dropdown-item" href="#">
                                    <i className="fa-sharp fa-regular fa-eye-slash me-1" /> Hide
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    <i className="fa-sharp fa-solid fa-link me-2" />Copy Link
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    <i className="fa-sharp fa-regular fa-bookmark me-3" />Save This Post
                                </a>
                            </li>
                        </ul>


                    </div>
                </div>

                <div className='row'>
                    <img className='img-fluid rounded p-3' alt='posted image' src='https://images.unsplash.com/photo-1679666964254-8dc133328f28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80' />
                </div>

                <div className='row'>
                    <div className='col-6 d-flex justify-content-start'>
                        <i className="fa-sharp fa-regular fa-heart ms-1 ps-1" />
                        <i className="fa-sharp fa-regular fa-comment ms-1 ps-1" />
                        <i className="fa-solid fa-paper-plane ms-1 ps-1" />
                    </div>
                    <div className='col-6 d-flex justify-content-end'>
                        <span className='fw-bold me-2'>200 likes</span>
                    </div>
                </div>
                <div className='row justify-content-start'>
                    <span className='text-muted ms-2 timestamp'>2 Hours Ago</span>
                </div>
            </div>
        </div>
    )
}

export default Card;