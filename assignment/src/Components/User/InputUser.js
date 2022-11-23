import React from 'react';
import './Use.css';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import DatePicker from "react-datepicker";
import AllUser from './AllUser';

const InputUser = () => {
    const [name, setName] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [date, setDate] = useState(2022-11-23);
    const [visibility, setVisibility] = useState(false);
    const [requirement, setRequirement] = useState(false);
    const age = 2022-parseInt(date); 

    const [email, setEmail] = useState(''); 
    const [phone, setPhone] = useState('');

    const onSubmit = (data) => {
        if(date !== 1988){
            setVisibility(true);
            setRequirement(false);
            const user = {'Name':name,'Email':email,'Phone':phone, 'DateOfBirth':date, 'Age': age};
            const localStorageItem = localStorage.getItem('users'); 
            let userArray = JSON.parse(localStorageItem);
            if(userArray === null){ 
                userArray = [];
                userArray.push(user);
                const userData = JSON.stringify(userArray); 
                localStorage.setItem('users', userData); 
            }
            else{
                const usersArray = Object.values(userArray);
                usersArray.push(user);
                const userData = JSON.stringify(usersArray); 
                localStorage.setItem('users', userData); 
            }
        }
        else{
            setRequirement(true);
        }
    }
    return (
        <div>
            <div className="min-h-screen hero">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="flex justify-center mb-4 text-3xl font-bold text-purple-600">User added is here</h1>
                        <AllUser/>
                    </div>
                    <div style={{background: 'aliceBlue'}} className="flex-shrink-0 w-full max-w-lg shadow-2xl card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* This is for name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text my-label">Name</span>
                                    </label>
                                    <input
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Your name is required'
                                            },
                                            minLength: {
                                                value: 3,
                                                message: 'At least 3 char is required'
                                            },
                                            maxLength: {
                                                value: 20,
                                                message: '20 char is maximum'
                                            }
                                        })}
                                        aria-invalid={errors.name ? "true" : "false"} type="text" placeholder="Type your name" className="input input-bordered remove-border" onChange={e => setName(e.target.value)}
                                    />
                                    {errors.name?.type === 'required' && <p className='text-red-500' role="alert">{errors.name.message}</p>}

                                    {errors.name?.type === 'minLength' && <p className='text-red-500' role="alert">{errors.name.message}</p>}

                                    {errors.name?.type === 'maxLength' && <p className='text-red-500' role="alert">{errors.name.message}</p>}
                                </div>

                                {/* This is for email */}
                                <div className="my-4 form-control">
                                    <label className="label">
                                        <span className="label-text my-label">Email</span>
                                    </label>
                                    <input
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is required'
                                            },
                                            pattern: {
                                                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                                message: 'Please type a valid email'
                                            }
                                        })} onChange={e => setEmail(e.target.value)}
                                        aria-invalid={errors.email ? "true" : "false"} type="text" placeholder="Type your email" className="input input-bordered remove-border"/>
                                    {errors.email?.type === 'required' && <p className='text-red-500' role="alert">{errors.email.message}</p>}

                                    {errors.email?.type === 'pattern' && <p className='text-red-500' role="alert">{errors.email.message}</p>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text my-label">Phone</span>
                                    </label>
                                    <input
                                        {...register("phone", {
                                            minLength: {
                                                value: 10,
                                                message: '10 digits is required for phone.'
                                            }
                                        })} onChange={e => setPhone(e.target.value)} 
                                        aria-invalid={errors.firstName ? "true" : "false"} type="number" placeholder="Type your name" className="input input-bordered remove-border"
                                    />
                                    {errors.phone?.type === 'minLength' && <p className='text-red-500' role="alert">{errors.phone.message}</p>}
                                </div>


                                <div className="mt-4 mb-8 form-control">
                                    <label className="label">
                                        <span className="label-text my-label">Age</span>
                                    </label>

                                    <div class="relative">
                                        <div>
                                        <input onChange={e => setDate(e.target.value)} type="date" class="bg-gray-50 madeInput border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Date of birth" />
                                        {
                                            requirement && <p className='text-red-500'>Age is required</p>
                                        }
                                        {
                                        visibility? <p className='text-red-500 show-age'>You're {2022-parseInt(date)} years old</p> : ''
                                        }
                                        </div>
                                    </div>
                                    {errors.age?.type === 'required' && <p className='text-red-500' role="alert">{errors.age.message}</p>}
                                </div>
                                <div className="mt-4 form-control">
                                    <input type="submit" value='Submit' className='btn btn-outline btn-info' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputUser;