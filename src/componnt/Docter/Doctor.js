import React from 'react';
import logo  from '../../images/Breting.png'

const Doctor = () => {
    return (
        <div className='mt-5'>
            <div className='text-center'>
               <h2>WHAT SPECIAL IN MEDICARE</h2>
               <img src={logo} alt="" />
               <h5><small>We provide the best services for your health</small></h5> 
            </div>
            <div>
            <div class="container px-4 w-75 mt-5">
            <div class="row gx-5">
                <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="p-3 border">
                    <img className='img-fluid' src="https://i.ibb.co/MZgS7QJ/Cute-girl-and-her-mother-looking-at-the-doctor-in-hospital.jpg" alt="" />
                    <h3>Dr. Saurabh Bhargava</h3>
                    <p> graduate from the Bangalore Medical College, he completed his surgical and urological training from the Royal College of Surgeons England, UK and Uro-oncology</p>
                    <button className='btn btn-primary'>Details</button>
                </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="p-3 border">
                <img className='img-fluid' src="https://i.ibb.co/MZgS7QJ/Cute-girl-and-her-mother-looking-at-the-doctor-in-hospital.jpg" alt="" />
                    <h3>Dr. Saurabh Bhargava</h3>
                    <p> graduate from the Bangalore Medical College, he completed his surgical and urological training from the Royal College of Surgeons England, UK and Uro-oncology</p>
                    <button className='btn btn-primary '>Details</button>
                </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="p-3 border">
                <img className='img-fluid' src="https://i.ibb.co/MZgS7QJ/Cute-girl-and-her-mother-looking-at-the-doctor-in-hospital.jpg" alt="" />
                    <h3>Dr. Saurabh Bhargava</h3>
                    <p> graduate from the Bangalore Medical College, he completed his surgical and urological training from the Royal College of Surgeons England, UK and Uro-oncology</p>
                    <button className='btn btn-primary'>Details</button>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Doctor;