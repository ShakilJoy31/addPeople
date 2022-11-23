import React from 'react';
import navbarHome from '../Components/image/header.jpg'
import './Navbar.css'; 

const Navbar = () => {
    return (
        <div className='px-16 App'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">
                        <img src={navbarHome} alt="" />
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0 mt-6">
                        <li className='navbar-item'><a>Product</a></li>
                        <li className='navbar-item' tabIndex={0}>
                            <a>
                                Club
                            </a>
                        </li>
                        <li className='navbar-item'><a>Get in touch</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;