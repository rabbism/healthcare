import React, { useEffect, useState } from 'react';
import UserService from '../UserSevice/UserService';
import breating from '../../images/Breting.png'

const EndBanner = () => {
    const [user ,setUser] =useState([]);


    useEffect(() =>{
        fetch('./fakeHomeData.json')
        .then( res => res.json())
        .then(data => setUser(data))
    },[])
    return (
       <div>
           <div className='mt-5 mb-5'>
           </div>
           <div className='text-center'>
               <h2 className='fw-bold'>We Offer Different <span className='text-primary'>Services</span> To Improve Your Health</h2>
               <img src={breating} alt="" />
               <p className='fw-normal'>Get energizing workout moves, healthy recipes, and advice on losing weight and feeling great from Health.com.<br></br> Find out how to manage diabetes and depression</p>
           </div>

        <div className="container px-4">
            <div className='row gx-5'>
                {
                    user.map(user =><UserService key={user.id} user={user}></UserService> )
                }

            
            </div>
        </div>
       </div>
       
    );
};

export default EndBanner;