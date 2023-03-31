import React from 'react';

const ToolsManufacturer = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-9" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                <div>
                    <h1 className='flex justify-center mb-4 text-4xl font-bold text-purple-600'>Application Picture</h1>
                    <div className='mb-8'>
                        <img className='rounded-lg' src="https://i.ibb.co/Yk2gGvd/Screenshot-686.png" alt="" />
                    </div>

                    <div className='mb-8'>
                        <img className='rounded-lg' src="https://i.ibb.co/NpYGGGL/Screenshot-687.png" alt="" />
                    </div>
                    
                    <div className='mb-12'>
                        <img className='rounded-lg' src="https://i.ibb.co/Lt9mPTp/Screenshot-688.png" alt="" />
                    </div>
                </div>

                    <h3 class="font-bold text-4xl flex justify-center mb-4 text-orange-500">Tools Manufacturer</h3>
                    <div className='flex justify-between mb-4 text-2xl'>
                                    <a target='_blank' href="https://tools-manufacturer.web.app/"><button class="btn btn-sm">Live site</button></a>
                                    <a target='_blank' href="https://github.com/ShakilJoy31/tools-manufacturer-website"><button class="btn btn-sm">Client Code</button></a>
                                    <a target='_blank' href="https://github.com/ShakilJoy31/tools-manufacturer-server"><button class="btn btn-sm">Server Code</button></a>
                                </div>
                                
                    <ul className='text-xl'>
                        <li><i class="fa-solid fa-circle text-purple-400"></i> People can order any tool that they need and then have to pay. Payment gateway was
                            added and an user can pay for the required product whenever they want to.</li><br />

                        <li><i class="fa-solid fa-circle text-purple-400"></i> This project is different for general users and admin. Admin can add a product, delete a
                            product and make another user an admin and so on</li><br />

                        <li><i class="fa-solid fa-circle text-purple-400"></i> There are two role playing parts in this project. One is the Admin role another is
                            the user role. To log in as admin use this email and password below:
                            Email: herokujoy123@gmail.com password: Heroku123
                        </li><br />
                        
                    </ul>
                    <div className='flex items-center justify-center gap-2'>
                        <h1 className='text-xl'>Used: </h1>
                    <button class="btn btn-xs btn-primary">React</button>
                    <button class="btn btn-xs btn-primary">NodeJs</button>
                    <button class="btn btn-xs btn-primary">MongoDB</button>
                    <button class="btn btn-xs btn-primary">Firebase</button>
                    <button class="btn btn-xs btn-primary">Material UI</button>
                    </div>
                    <div class="modal-action flex justify-center">
                        <label for="my-modal-9" class="btn btn-error text-white w-full btn-outline text-2xl">Close This Project</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolsManufacturer;