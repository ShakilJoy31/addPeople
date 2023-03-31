import React from 'react';
import {HashLink as Link } from 'react-router-hash-link'; 

const Navbar = () => {
    return (
        <div className=''>
            <div style={{
                backgroundColor: 'black',
            }} className="px-4 navbar lg:px-12 md:px-8">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow-white rounded-box w-52">
                            <li style={{
                                fontSize:'28px'
                            }} className='text-white'><Link smooth to='#aboutme'>About me</Link></li>
                            <li className='text-white'><Link smooth to='#projects'>Projects</Link></li>
                            <li className='text-white' tabindex="0">
                                <Link smooth to='#myskills' class="justify-between">
                                Skills Section
                                </Link>
                            </li>
                            <li className='text-white'><Link smooth to='#contactme'>Contact me</Link></li>
                        </ul>
                    </div>
                    <Link smooth to='#' className="grid flex-col text-2xl text-white normal-case"><span className='hover:text-red-400'>Shakidul Islam Shakil</span> <small style={{
                        fontSize:'15px'
                    }} className='text-red-400'>Full stack developer</small></Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">

                    <li className='text-xl text-white hover:text-red-400'><Link smooth to='#aboutme'>About me</Link></li>

                        <li className='text-xl text-white hover:text-red-400'><Link smooth to='#projects'>Projects</Link></li>

                        <li className='text-xl text-white hover:text-red-400' tabindex="0">
                            <Link smooth to='#myskills'>Skills Section</Link>
                        </li>

                        <li className='text-xl text-white hover:text-red-400'><Link smooth to='#contactme'>Contact me</Link></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    <div class="dropdown dropdown-end hidden lg:block md:block ">

                        <label tabindex="0" class=" btn-ghost btn-circle avatar">
                            <div class="rounded-full">
                                
                            <a target='_blank' href="https://www.facebook.com/shakil.ahammedjoy.39/"><i class="fa-brands fa-facebook text-4xl "></i></a>
                            </div>
                        </label>
                        
                        <label tabindex="0" class="btn btn-ghost avatar">
                            <div class="rounded-full">
                            <a target='_blank' href="https://www.linkedin.com/in/shakidul-islam-shakil-537696219/"><i class="fa-brands fa-linkedin text-4xl "></i></a>
                            </div>
                        </label>

                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="rounded-full">
                            <a target='_blank' href="https://github.com/shakiljoy31"><i class="fa-brands fa-github text-4xl "></i></a>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;