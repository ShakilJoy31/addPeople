import React from 'react';

const Accomplishments = () => {
    return (
        <div className='mb-16 lg:mx-24'>
            <h1 className='flex justify-center mb-4 text-5xl text-white'>Personal Accomplishments</h1>
            <div>
                <div className='grid'>
                    <div className='grid gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>

                        <div style={{
                                backgroundColor: '#19A7CE',
                                borderRadius: '5px'
                            }} class="card hover:shadow-black shadow-2xl" data-aos="flip-right">
                            <div class="card-body">
                                <h2 className="flex justify-center text-4xl text-white card-title">30 +</h2>
                                <p className="flex justify-center text-xl text-black">Projects</p>
                                <div class="card-actions justify-end">
                                </div>
                            </div>
                        </div>

                        
                        <div style={{
                                backgroundColor: '#19A7CE',
                                borderRadius: '5px'
                            }} class="card hover:shadow-black shadow-2xl" data-aos="flip-left">
                            <div class="card-body">
                                <h2 className="flex justify-center text-4xl text-white card-title">2 +</h2>
                                <p className="text-xl text-black ">Years of Coding Experience</p>
                                <div class="card-actions justify-end">
                                </div>
                            </div>
                        </div>


                        <div style={{
                                backgroundColor: '#19A7CE',
                                borderRadius: '5px'
                            }} class="card hover:shadow-black shadow-2xl" data-aos="flip-right">
                            <div class="card-body">
                                <h2 className="flex justify-center text-4xl text-white card-title">15 +</h2>
                                <p className="flex justify-center text-xl text-black">Github Followers</p>
                                <div class="card-actions justify-end">
                                </div>
                            </div>
                        </div>


                        <div style={{
                                backgroundColor: '#19A7CE',
                                borderRadius: '5px'
                            }} class="card hover:shadow-black shadow-2xl" data-aos="flip-left">
                            <div class="card-body">
                                <h2 className="flex justify-center text-4xl text-white card-title">5 +</h2>
                                <p className="flex justify-center text-xl text-black">Certificates</p>
                                <div class="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accomplishments;