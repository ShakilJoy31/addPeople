import React from 'react';

const Todo = () => {
    return (
        <div>
        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
            <div>
                <h1 className='flex justify-center mb-4 text-4xl font-bold text-purple-600'>Application Picture</h1>
                <div className='mb-8'>
                    <img className='rounded-lg' src="https://i.ibb.co/wKpNCGS/Screenshot-706.png" alt="" />
                </div>

                <div className='mb-8'>
                    <img className='rounded-lg' src="https://i.ibb.co/bLqqydJ/Screenshot-707.png" alt="" />
                </div>
                
                <div className='mb-12'>
                    <img className='rounded-lg' src="https://i.ibb.co/XFfGjym/Screenshot-708.png" alt="" />
                </div>
            </div>

                <h3 class="font-bold text-4xl flex justify-center mb-4 text-orange-500">Todo Application</h3>
                <div className='flex justify-between text-2xl'>
                                    <a target='_blank' href="https://login-signup-e0cc2.web.app/
"><button class="btn btn-sm">Live site</button></a>
                                    <a target='_blank' href="https://github.com/ShakilJoy31/Todo-app
"><button class="btn btn-sm">Client Code</button></a>
                                    <a target='_blank' href="https://github.com/ShakilJoy31/todo-app-server
"><button class="btn btn-sm">Server Code</button></a>
                                </div>
                            
                <ul className='text-xl'>
                    <li><i class="fa-solid fa-circle text-purple-400"></i> Our everyday activity will be saved to the database by this application. </li><br />

                    <li><i class="fa-solid fa-circle text-purple-400"></i> Without Authentication user is not allowed to add their task and see the tasks.</li><br />

                    <li><i class="fa-solid fa-circle text-purple-400"></i> After Authentication user can add tasks and see it. 
                    </li><br />
                    
                </ul>
                <div className='flex items-center gap-2'>
                        <h1 className='text-xl'>Used: </h1>
                    <button class="btn btn-xs btn-primary">React</button>
                    <button class="btn btn-xs btn-primary">NodeJs</button>
                    <button class="btn btn-xs btn-primary">MongoDB</button>
                    </div>

                <div class="modal-action flex justify-center">
                    <label for="my-modal-4" class="btn btn-error text-white w-full btn-outline text-2xl">Close This Project</label>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Todo;