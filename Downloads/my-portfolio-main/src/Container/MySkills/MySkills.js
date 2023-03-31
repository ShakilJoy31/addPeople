import React from 'react';
import { Outlet } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const MySkills = () => {
    return (
        <div id='myskills' className='px-4 pt-8 lg:px-12 md:px-8'>
            <div>
                <h1 className='flex justify-center mb-4 text-5xl text-white'>Technology</h1>
            </div>
            <div class="grid">
                <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>

                    <div class="card bg-base-100 hover:shadow-white shadow-xl image-full" data-aos="zoom-in-up">
                        <figure><img src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-light_1200x628.png?sfvrsn=43eb5f2a_2" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title flex justify-center text-3xl text-red-400">Front-End</h2>
                            <p className='flex justify-center mb-2 text-2xl text-red-300'>Experience with</p>
                            <div className='flex justify-center'>
                                <div className='mr-4 text-red-200'>
                                    <h1 class="text-xl">HTML</h1>

                                    <h1 class="text-xl">CSS</h1>

                                    <h1 class="text-xl">Bootstrap</h1>

                                    <h1 class="text-xl">Tailwind</h1>


                                </div>

                                <div className='mr-4 text-red-200'>
                                    <h1 class="text-xl">JavaScript</h1>
                                    <h1 class="text-xl">ES6</h1>

                                    <h1 class="text-xl">ReactJs</h1>

                                    <h1 class="text-xl">React Router</h1>
                                </div>

                                <div className='mr-4 text-red-200'>
                                    <h1 class="text-xl">Authentication</h1>

                                    <h1 class="text-xl">MaterialUI</h1>
                                    <h1 class="text-xl">React Hooks</h1>
                                    <h1 class="text-xl">and so on</h1>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="card bg-base-100 hover:shadow-white shadow-2xl image-full" data-aos="zoom-in-down">
                        <figure><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--4BjMqsdN--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4anecy5mdl4pho8w7519.jpg" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title flex justify-center text-3xl text-red-400">Back-End</h2>
                            <p className='flex justify-center mb-2 text-2xl text-red-300'>Experience with</p>
                            <div className='flex justify-center'>

                                <div className='mr-4 text-red-200'>
                                    <h1 class="text-xl">NodeJs</h1>
                                    <h1 class="text-xl">JWT</h1>

                                </div>

                                <div className='mr-4 text-red-200'>
                                    <h1 class="text-xl">ExpressJs</h1>
                                    <h1 class="text-xl">Firebase</h1>
                                </div>

                                <div className='mb-12 text-red-200'>
                                    <h1 class="text-xl">MongoDB</h1>
                                    <h1 class="text-xl">and so on</h1>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="card shadow-2xl hover:shadow-white image-full" data-aos="zoom-in-up">
                        <figure><img src="https://miro.medium.com/max/1400/1*yaZ-u-EiZ6kanJP9zPFXVQ.jpeg" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title flex justify-center text-3xl text-red-400">Design</h2>
                            <p className='flex justify-center mb-2 text-2xl text-red-300'>Experience with</p>
                            <div className='flex justify-center'>

                                <div className='mr-4 text-red-200'>
                                    <h1 class="text-xl">Figma</h1>
                                    <h1 class="text-xl">and so on</h1>
                                </div>

                                <div className='mr-4 text-red-200'>
                                <h1 class="text-xl">Adobe PhotoShop</h1>
                                </div>

                                <div className='mb-20 text-red-200'>
                                <h1 class="text-xl">Adobe XD</h1>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="card bg-base-100 hover:shadow-white shadow-2xl image-full" data-aos="zoom-in-down">
                        <figure><img src="https://media.istockphoto.com/photos/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-picture-id1344939844?b=1&k=20&m=1344939844&s=170667a&w=0&h=f0QIXpR3sMZmWGoq7oSCvBMhYVFyg72kiLQRAvnci-g=" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title flex justify-center text-3xl text-red-400">Soft Skills</h2>
                            <p className='flex justify-center mb-2 text-2xl text-red-300'>Experience with</p>
                            <div className='flex justify-center'>

                                <div className='mr-4 text-red-200'>
                                    <h1 class="text-xl">Colabaration</h1>

                                    <h1 class="text-xl">Compassion</h1>
                                </div>

                                <div className='mr-4 text-red-200'>
                                <h1 class="text-xl">Team working</h1>
                                <h1 class="text-xl">Networking</h1>
                                </div>

                                <div className='mb-16 text-red-200'>
                                <h1 class="text-xl">Accountability</h1>
                                <h1 class="text-xl">and more</h1>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="card bg-base-100 hover:shadow-white shadow-2xl image-full" data-aos="zoom-in-up">
                        <figure><img src="https://developers.redhat.com/sites/default/files/styles/list_item_thumb/public/2021_DevTools_Topic_Image_A_1.png?itok=SshjsMsc" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title flex justify-center text-3xl text-red-400">Tools</h2>
                            <p className='flex justify-center mb-2 text-2xl text-red-300'>Experience with</p>
                            <div className='flex justify-center'>

                                <div className='mr-4 text-red-200'>
                                    <h1 class="text-xl">Axios</h1>
                                    <h1 class="text-xl">Firebase</h1>

                                    <h1 class="text-xl">Tailwind</h1>
                                </div>

                                <div className='mr-4 text-red-200'>
                                <h1 class="text-xl">Netlify</h1>
                                <h1 class="text-xl">Git</h1>
                                <h1 class="text-xl">And more</h1>
                                </div>
                                

                                <div className='mb-24 text-red-200'>
                                <h1 class="text-xl">Heroku</h1>
                                <h1 class="text-xl">Github</h1>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="card shadow-2xl hover:shadow-white image-full" data-aos="zoom-in-down">
                        <figure><img src="https://d26519lbsgqyxd.cloudfront.net/dashboard/wp-content/uploads/2021/08/20103513/businessman-touching-virtual-screen-digital-transformation-wording-icons-business-technology-information-innovation-concept.jpg" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title flex justify-center text-3xl text-red-400 mb-12">Still Learning</h2>
                            <div className='flex justify-center'>
                                <div className='mr-4 text-red-200'>
                                    <h1 class="text-xl">NextJs</h1>
                                    <h1 class="text-xl">GraphQL</h1>
                                </div>

                                <div className='mr-4 text-red-200'>
                                    <h1 class="text-xl">MySql</h1>
                                    <h1 class="text-xl">And more</h1>
                                </div>

                                <div className='text-red-200'>
                                    <h1 class="text-xl">Redux</h1>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MySkills;