import React from 'react';
import BackToTop from '../BackToTop';


const Blogs = () => {
    return (
        <div className='text-base-content' id='blogs'>
            <footer class="footer footer-center p-10 rounded">
                <div class="grid grid-flow-col gap-4">
                    <div>
                        <p className='text-xl'>Call</p>
                        <h1 className='text-2xl'>01761043883</h1>
                    </div>
                    <div>
                        <p className='text-xl'>Email</p>
                        <h1 className='text-2xl'>shakidul31@gmail.com</h1>
                    </div>
                </div>
                <div>
                    <div class="grid grid-flow-col gap-4">
                        <div class="">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="rounded-full">
                                    <a target='_blank' href="https://www.facebook.com/shakil.ahammedjoy.39/"><i class="fa-brands fa-facebook text-4xl"></i></a>
                                </div>
                            </label>

                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="">
                                    <a target='_blank' href="https://www.linkedin.com/in/shakidul-islam-shakil-537696219/"><i class="fa-brands fa-linkedin text-4xl"></i></a>
                                </div>
                            </label>

                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="">
                                    <a target='_blank' href="https://github.com/shakiljoy31"><i class="fa-brands fa-github text-4xl"></i></a>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-xl'>Copyright © 2022 - All right reserved.</p>
                </div>
                <div className='flex justify-between'>
                    {/* <BackToTop></BackToTop> */}
                </div>
            </footer>
        </div>
    );
};

export default Blogs;