import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {send} from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'; 
import BackToTop from '../BackToTop';

const ContuctMe = () => {
    const [modal, setModal] =useState(null); 
    const [name, setName] =useState(''); 
    const [email, setEmail] =useState(''); 
    const [message, setMessage] =useState(''); 

    const handleName = (event) =>{
        setName(event.target.value); 
    }

    const handleEmail = (event) =>{
        setEmail(event.target.value); 
    }

    const handleMessage = (event) =>{
        setMessage(event.target.value); 
    }

    const handleOnSubmit = () =>{
        send(
            'service_hj0fwla', 
            'template_cz24k49', 
            {name, email, message}, 
            'K8liY1EZYZd7gRDVk'
        )
        .then(res => {
            toast.success('I have received your message. Let me check this out.')
            console.log('success', res.status, res.text, modal); 
        })
        .catch(error => {
            console.log('fail', error); 
        })
        setModal(200);
        console.log('jhndjfhdjks');  
    }

    console.log(modal); 
    return (
        <div className='w-100'>
            <div className='mb-12 w-100' id='contactme'>
            <div>
                <h1 className='flex justify-center text-5xl text-white'>Contact With Me</h1>
                <p className='flex justify-center mb-8 text-black'>Let's keep in touch</p>
            </div> 


            <div className='rounded-lg' style={{
                backgroundImage: `url("https://img.freepik.com/free-photo/businessman-holding-smartphone-with-communication-icons-letter-icon-email-icons-newsletter-email-protect-your-personal-information-spam-mail-customer-service-call-center-contact_162459-2429.jpg?w=1380")`
            }} class="hero rounded-lg w-100 bg-red-100">
                <div class="hero-content w-100 flex-col lg:flex-row-reverse">
                    <div class="card w-96 block mx-auto shadow-2xl shadow-purple-500 bg-emerald-200">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input onBlur={handleName} type="text" name='name' placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" />
                            </div>
                            
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input onBlur={handleEmail} type="email" name='email' placeholder="Type here" class="input input-bordered input-success w-full max-w-xs" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your message</span>
                                </label>
                                <input onBlur={handleMessage} type="text" name='message' placeholder="Type Your Message here" class="input input-bordered input-lg w-full max-w-xs" />
                            </div>

                            <div class="form-control mt-6">
                            <label onClick={handleOnSubmit} type='submit' for="my-modal-5" class="btn modal-button btn-info text-2xl">Send <i class="fa-solid fa-paper-plane text-2xl ml-2 text-purple-600"></i></label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 class="text-5xl font-bold text-amber-200 mb-4">Get In Touch With Me <i class="fa-solid fa-envelope"></i></h1>
                        <div>
                            <a className='mr-4' target='_blank' href="https://www.facebook.com/shakil.ahammedjoy.39/"><button class="btn btn-xs btn-error">Facebook</button></a>

                            <a className='mr-4' target='_blank' href=""><button class="btn btn-xs btn-error">Email</button></a>

                            <a className='mr-4' target='_blank' href="https://www.linkedin.com/in/shakidul-islam-shakil-537696219/"><button class="btn btn-xs btn-error">Linked in</button></a>

                            <a className='mr-4' target='_blank' href=""><button class="btn btn-xs btn-error">Twitter</button></a>

                            <a className='mr-4' target='_blank' href="https://www.instagram.com/shakil.ahammedjoy.39/?hl=en"><button class="btn btn-xs btn-error">Instagram</button></a>

                        </div>
                        
                        <p class="py-6 text-white text-2xl">Send your email here.</p>
                    </div>
                </div>
                <div className='flex justify-end'>
                </div>
            </div>
            {
                modal && <div className='bg-red-200'>
                    <input type="checkbox" id="my-modal-5" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                  <div class="modal-box bg-orange-100">
                    <h3 class="font-bold text-green-400 flex justify-center text-3xl">Thanks a lot for texting me.</h3>
                    <p class="py-4 text-purple-400 flex justify-center text-xl">Let me get back to you as early as possible.</p>
                    <div class="modal-action flex justify-center">
                      <label for="my-modal-5" class="btn btn-outline btn-info">You are welcome</label>
                    </div>
                  </div>
                </div>
                </div>
            }
            <ToastContainer></ToastContainer>
        </div>
        </div>
    );
};

export default ContuctMe;