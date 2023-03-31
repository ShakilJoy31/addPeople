import React from 'react';

const WildPhotography = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                <div>
                    <h1 className='flex justify-center mb-4 text-4xl font-bold text-purple-600'>Application Picture</h1>
                    <div className='mb-8'>
                        <img className='rounded-lg' src="https://i.ibb.co/nfkTbJP/Screenshot-694.png" alt="" />
                    </div>

                    <div className='mb-8'>
                        <img className='rounded-lg' src="https://i.ibb.co/d5473xF/Screenshot-695.png" alt="" />
                    </div>
                    
                    <div className='mb-12'>
                        <img className='rounded-lg' src="https://i.ibb.co/kQK98Z9/Screenshot-696.png" alt="" />
                    </div>
                </div>

                    <h3 class="font-bold text-4xl flex justify-center mb-4 text-orange-500">Wild Photography</h3>
                    <div className='flex justify-between mb-4 text-2xl'>
                                    <a target='_blank' href="https://wild-photography-world.web.app"><button class="btn btn-sm">Live site</button></a>
                                    <a target='_blank' href="https://github.com/ShakilJoy31/wild-photography-website"><button class="btn btn-sm">Client Code</button></a>
                                </div>
                                
                    <ul className='text-xl'>
                        <li><i class="fa-solid fa-circle text-purple-400"></i> Any user can book for the photography event.</li><br />

                        <li><i class="fa-solid fa-circle text-purple-400"></i> To book the event photography user must log in and then make the order placed.</li><br />

                        <li><i class="fa-solid fa-circle text-purple-400"></i> Banner is used for the taken photo to display over the application. 
                        </li><br />
                        
                    </ul>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-xl'>Used: </h1>
                    <button class="btn btn-xs btn-primary">React</button>
                    <button class="btn btn-xs btn-primary">Firebase</button>
                    <button class="btn btn-xs btn-primary">React Router</button>
                    <button class="btn btn-xs btn-primary">Authentication</button>
                    </div>
                    <div class="modal-action flex justify-center">
                        <label for="my-modal-3" class="btn btn-error text-white w-full btn-outline text-2xl">Close This Project</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WildPhotography;