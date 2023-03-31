import React from 'react';

const SmartBookWarehouse = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-5" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                <div>
                    <h1 className='flex justify-center mb-4 text-4xl font-bold text-purple-600'>Application Picture</h1>
                    <div className='mb-8'>
                        <img className='rounded-lg' src="https://i.ibb.co/5rzVf2T/Screenshot-697.png" alt="" />
                    </div>

                    <div className='mb-8'>
                        <img className='rounded-lg' src="https://i.ibb.co/K0Hq8Vt/Screenshot-698.png" alt="" />
                    </div>
                    
                    <div className='mb-12'>
                        <img className='rounded-lg' src="https://i.ibb.co/wK5NPL9/Screenshot-699.png" alt="" />
                    </div>
                </div>

                    <h3 class="font-bold text-4xl flex justify-center mb-4 text-orange-500">Smart-book Warehouse</h3>
                    <div className='flex justify-between mb-4 text-2xl'>
                                    <a target='_blank' href="https://smart-book-warehouse.web.app/"><button class="btn btn-sm">Live site</button></a>
                                    <a target='_blank' href="https://github.com/ShakilJoy31/smart-book-warehouse-website"><button class="btn btn-sm">Client Code</button></a>
                                    <a target='_blank' href="https://github.com/ShakilJoy31/smart-book-warehouse-server"><button class="btn btn-sm">Server Code</button></a>
                                </div>
                                
                    <ul className='text-xl'>
                        <li><i class="fa-solid fa-circle text-purple-400"></i> A website for the warehouse where the book’s information will be in touch. Owner of the
warehouse can update whatever they want.
</li><br />

                        <li><i class="fa-solid fa-circle text-purple-400"></i> JWT implemented and verified the user when they logged in to it.</li><br />

                        <li><i class="fa-solid fa-circle text-purple-400"></i> Has a strong authentication to recognize users.
                        </li><br />

                        <li><i class="fa-solid fa-circle text-purple-400"></i> User of this Application can add a book and this added book will be saved to the database. 
                        </li><br />
                        
                    </ul>
                    <div className='flex items-center justify-center gap-2'>
                        <h1 className='text-xl'>Used: </h1>
                    <button class="btn btn-xs btn-primary">React</button>
                    <button class="btn btn-xs btn-primary">NodeJs</button>
                    <button class="btn btn-xs btn-primary">MongoDB</button>
                    <button class="btn btn-xs btn-primary">Firebase</button>
                    <button class="btn btn-xs btn-primary">Tailwind CSS</button>
                    </div>

                    <div class="modal-action flex justify-center">
                        <label for="my-modal-5" class="btn btn-error text-white w-full btn-outline text-2xl">Close This Project</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmartBookWarehouse;