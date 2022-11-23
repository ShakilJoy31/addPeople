import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AllUser = () => {
    let displayAbleUsers;
    const [localStorageUser, setLocalStorageUser] = useState([]); 
    useEffect(()=>{
        const allUsers = localStorage.getItem('users');
        if(allUsers){
            displayAbleUsers = JSON.parse(allUsers);
            console.log('vitore dhukche'); 
            console.log(allUsers); 
        }
        else{
            console.log(allUsers); 
        }
        setLocalStorageUser(displayAbleUsers); 
    }, [localStorageUser]);
    return (
        <div>
            <div className="overflow-x-auto rounded-lg shadow-2xl">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone No.</th>
                            <th>Date of Birth</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                        <tbody>
                        {
                            localStorageUser?.map((singleUser, index) => <tr className='table-data'>
                                <th>{index + 1}</th>
                                <td>{singleUser.Name}</td>
                                <td>{singleUser.Email}</td>
                                <td>{singleUser.Phone}</td>
                                <td>{singleUser.DateOfBirth}</td>
                                <td>{singleUser.Age}</td>
                            </tr>)
                        }
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default AllUser;