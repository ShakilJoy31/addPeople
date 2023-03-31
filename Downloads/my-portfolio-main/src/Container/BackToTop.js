import React from 'react';
import {HashLink as Link } from 'react-router-hash-link'; 

const BackToTop = () => {
    return (
        <div>
            <div className='flex justify-end'>
            <Link smooth to="#top">
                <div className='p-2 rounded-lg bg-lime-100'>
                <i class="fa-solid fa-arrow-up text-5xl text-blue-600 flex justify-center"></i>
                <p className='text-2xl'>Back to Top</p>
                </div>
            </Link>
            </div>
        </div>
    );
};

export default BackToTop;