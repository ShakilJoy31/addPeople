import React, { useState } from 'react';
import SmartBookWarehouse from './SmartBookWarehouse';
import Temparature from './Temparature';
import Todo from './Todo';
import ToolsManufacturer from './ToolsManufacturer';
import WildPhotography from './WildPhotography';

const Projects = () => {
    const [tools, setTools] = useState(false); 
    const [smart, setSmart] = useState(false); 
    const [todo, setTodo] = useState(false); 
    const [wild, setWild] = useState(false); 
    const [temperatureApp, setTemperature] = useState(false); 

    const toolsManufacturer = () =>{
        setTools(true);  
    }

    const smartBookWarehouse = () =>{
        setSmart(true); 
    }

    const toDoApplication = () =>{
        setTodo(true); 
    }

    const wildPhotoGraphy = () =>{
        setWild(true); 
    }

    const temperature = () =>{
        setTemperature(true); 
    }

    console.log(tools); 
    console.log(smart); 
    console.log(todo); 
    console.log(wild); 
    console.log(temperatureApp); 
    
    return (
        <div className='px-4 pt-4 lg:px-12 md:px-8' id='projects'>
            <h1 className='flex justify-center mb-8 text-5xl text-white'>Projects Section</h1>
            <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                <div class="card card-compact w-100 bg-orange-50 shadow-2xl"  data-aos="zoom-in-up">
                    <figure><img className='w-full' src="https://i.ibb.co/TPtYqnp/Screenshot-673.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <div className='h-full'>
                            <div className=''>
                                <h2 class="card-title text-4xl">Tools Manufacturer</h2>
                                <div className='flex justify-between text-2xl'>
                                    <a target='_blank' href="https://tools-manufacturer.web.app/"><button class="btn btn-sm">Live site</button></a>
                                    <a target='_blank' href="https://github.com/ShakilJoy31/tools-manufacturer-website"><button class="btn btn-sm">Client Code</button></a>
                                    <a target='_blank' href="https://github.com/ShakilJoy31/tools-manufacturer-server"><button class="btn btn-sm">Server Code</button></a>
                                </div>

                            </div>
                            <ul className='text-xl'>
                                <li><i class="fa-solid fa-circle text-purple-400"></i> Firebase Authentication</li><br />
                                <li><i class="fa-solid fa-circle text-purple-400"></i> Responsive</li><br />
                                <li><i class="fa-solid fa-circle text-purple-400"></i> Adding, Deleting Products by the admin panel</li><br />
                                <li><i class="fa-solid fa-circle text-purple-400"></i> Payment Method Implemented</li><br />
                                <li><i class="fa-solid fa-circle text-purple-400"></i> JWT Verification for User and Admin</li><br />
                            </ul>
                        </div>
                        <div onClick={toolsManufacturer} class="card-actions justify-center block">
                            <label for="my-modal-9" class="btn modal-button btn-primary w-full">Explore More</label>
                        </div>
                    </div>
                </div>


                <div class="card card-compact w-100 bg-orange-50 shadow-2xl"  data-aos="zoom-in-down">
                    <figure><img className='w-full' src="https://i.ibb.co/x3PRjsX/Screenshot-676.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <div className='h-full'>
                            <div className=''>
                                <h2 class="card-title text-4xl">Smart-Book Ware houser</h2>
                                <div className='flex justify-between text-2xl'>
                                    <a target='_blank' href="https://smart-book-warehouse.web.app/"><button class="btn btn-sm">Live site</button></a>
                                    <a target='_blank' href="https://github.com/ShakilJoy31/smart-book-warehouse-website"><button class="btn btn-sm">Client Code</button></a>
                                    <a target='_blank' href="https://github.com/ShakilJoy31/smart-book-warehouse-server"><button class="btn btn-sm">Server Code</button></a>
                                </div>

                            </div>
                            <ul className='text-xl'>
                                <li><i class="fa-solid fa-circle text-purple-400"></i>Smart Firebase Authentication</li><br />
                                <li><i class="fa-solid fa-circle text-purple-400"></i> Books Information for the users is in Touch</li><br />
                                <li><i class="fa-solid fa-circle text-purple-400"></i> Owner of the Warehouse can update anything</li><br />
                                <li><i class="fa-solid fa-circle text-purple-400"></i> JWT implemented and verified the user when they logged in to it.
                                </li><br />

                            </ul>
                        </div>
                        <div onClick={smartBookWarehouse} class="card-actions justify-center block">
                        <label for="my-modal-5" class="btn modal-button btn-primary w-full">Explore More</label>
                        </div>
                    </div>
                </div>


                <div class="card card-compact w-100 bg-orange-50 shadow-2xl"  data-aos="zoom-in-up">
                    <figure><img className='w-full' src="https://i.ibb.co/hcJShmZ/Screenshot-680.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <div className='h-full'>
                            <div className=''>
                                <h2 class="card-title text-4xl">To-Do App</h2>
                                <div className='flex justify-between text-2xl'>
                                    <a target='_blank' href="https://login-signup-e0cc2.web.app/
"><button class="btn btn-sm">Live site</button></a>
                                    <a target='_blank' href="https://github.com/ShakilJoy31/Todo-app
"><button class="btn btn-sm">Client Code</button></a>
                                    <a target='_blank' href="https://github.com/ShakilJoy31/todo-app-server
"><button class="btn btn-sm">Server Code</button></a>
                                </div>

                            </div>
                            <ul className='text-xl'>
                                <li><i class="fa-solid fa-circle text-purple-400"></i> Firebase Authentication</li><br />
                                <li><i class="fa-solid fa-circle text-purple-400"></i> Responsive</li><br />
                                <li><i class="fa-solid fa-circle text-purple-400"></i> User can Add, Delete and See their daily activity through this Application</li><br />

                                <li><i class="fa-solid fa-circle text-purple-400"></i> Activity are being saved to the Database</li><br />

                                <li><i class="fa-solid fa-circle text-purple-400"></i> MongoDB is used as Database</li><br />
                            </ul>
                        </div>
                        <div onClick={toDoApplication} class="card-actions justify-center block">
                        <label for="my-modal-4" class="btn modal-button btn-primary w-full">Explore More</label>
                        </div>
                    </div>
                </div>


                <div class="card card-compact w-100 bg-orange-50 shadow-2xl"  data-aos="zoom-in-down">
                    <figure><img className='w-full' src="https://i.ibb.co/g3smNv2/Screenshot-681.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <div className='h-full'>
                            <div className=''>
                                <h2 class="card-title text-4xl">Wild Photography World</h2>
                                <div className='flex justify-between text-2xl'>
                                    <a target='_blank' href="https://wild-photography-world.web.app"><button class="btn btn-sm">Live site</button></a>
                                    <a target='_blank' href="https://github.com/ShakilJoy31/wild-photography-website"><button class="btn btn-sm">Client Code</button></a>

                                </div>

                            </div>
                            <ul className='text-xl'>
                                <li><i class="fa-solid fa-circle text-purple-400"></i> React Router Implemented</li><br />
                                <li><i class="fa-solid fa-circle text-purple-400"></i> User Can Book for the Photography</li><br />
                                <li><i class="fa-solid fa-circle text-purple-400"></i> Some Question Answer Written.</li><br />
                                <li><i class="fa-solid fa-circle text-purple-400"></i> Banner Added by Bootstrap</li><br />
                            </ul>
                        </div>
                        <div onClick={wildPhotoGraphy} class="card-actions justify-center block">
                        <label for="my-modal-3" class="btn modal-button btn-primary w-full">Explore More</label>
                        </div>
                    </div>
                </div>


                <div class="card card-compact w-100 bg-orange-50 shadow-2xl"  data-aos="zoom-in-up">
                    <figure><img className='w-full' src="https://i.ibb.co/FXVdjxh/Screenshot-682.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <div className='h-full'>
                            <div className=''>
                                <h2 class="card-title text-4xl">Temperature View</h2>
                                <div className='flex justify-between text-2xl'>
                                    <a target='_blank' href="https://shakiljoy31.github.io/show-temperature/index.html"><button class="btn btn-sm">Live site</button></a>
                                    <a target='_blank' href="https://github.com/ShakilJoy31/show-temperature"><button class="btn btn-sm">Client Code</button></a>
                                </div>

                            </div>
                            <ul className='text-xl'>
                                <li><i class="fa-solid fa-circle text-purple-400"></i> Loaded Data Calling API</li><br />
                                <li><i class="fa-solid fa-circle text-purple-400"></i> Responsive Website</li><br />
                                <li><i class="fa-solid fa-circle text-purple-400"></i> Suitable Background Picture</li><br />
                            </ul>
                        </div>
                        <div onClick={temperature} class="card-actions justify-center block">
                        <label for="my-modal-2" class="btn modal-button btn-primary w-full">Explore More</label>
                        </div>
                    </div>
                </div>

                {
                    tools && <ToolsManufacturer></ToolsManufacturer>
                }

                {
                    smart && <SmartBookWarehouse></SmartBookWarehouse>
                }

                {
                    todo && <Todo></Todo>
                }

                {
                    wild && <WildPhotography></WildPhotography>
                }

                {
                    temperatureApp && <Temparature></Temparature>
                }

            </div>
        </div>
    );
};

export default Projects;