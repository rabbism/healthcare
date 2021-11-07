import React from 'react';

const UserService = (props) => {
    const {name,img,des} =props.user
    return (
            <div className='col-lg-4'>
                <div class="p-3 border">
                    <img className='img-fluid' src={img} alt="" />
                    <h3>{name}</h3>
                    <p>{des}</p>
                    <button className='btn btn-primary'>Details</button>
                </div>
                </div>
        
    );
};

export default UserService;