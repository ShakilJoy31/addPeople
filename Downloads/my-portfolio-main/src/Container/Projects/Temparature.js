import React from 'react';

const Temparature = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-2" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <div>
                        <h1 className='flex justify-center mb-4 text-4xl font-bold text-purple-600'>Application Picture</h1>
                        <div className='mb-8'>
                            <img className='rounded-lg' src="https://i.ibb.co/bJR5Zyv/Screenshot-712.png" alt="" />
                        </div>

                        <div className='mb-8'>
                            <img className='rounded-lg' src="https://i.ibb.co/Sm3jbq5/Screenshot-713.png" alt="" />
                        </div>

                        <div className='mb-12'>
                            <img className='rounded-lg' src="https://i.ibb.co/BCChKG3/Screenshot-714.png" alt="" />
                        </div>
                    </div>

                    <h3 class="font-bold text-4xl flex justify-center mb-4 text-orange-500">Temperature Application</h3>
                    <div className='flex justify-between text-2xl'>
                        <a target='_blank' href="https://shakiljoy31.github.io/show-temperature/index.html"><button class="btn btn-sm">Live site</button></a>
                        <a target='_blank' href="https://github.com/ShakilJoy31/show-temperature"><button class="btn btn-sm">Client Code</button></a>
                    </div>

                    <ul className='text-xl'>
                        <li><i class="fa-solid fa-circle text-purple-400"></i> Loaded data calling weather API</li><br />

                        <li><i class="fa-solid fa-circle text-purple-400"></i> Made the website responsive and added cover photos to look different.
                        </li><br />

                        <li><i class="fa-solid fa-circle text-purple-400"></i> User will know the weathe information at any place according to time. 
                        </li><br />

                    </ul>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-xl'>Used: </h1>
                    <button class="btn btn-xs btn-primary">HTML</button>
                    <button class="btn btn-xs btn-primary">CSS</button>
                    <button class="btn btn-xs btn-primary">JavaScript</button>
                    <button class="btn btn-xs btn-primary">ES6</button>
                    <button class="btn btn-xs btn-primary">API</button>
                    </div>
                    <div class="modal-action flex justify-center">
                        <label for="my-modal-2" class="btn btn-error text-white w-full btn-outline text-2xl">Close This Project</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Temparature;