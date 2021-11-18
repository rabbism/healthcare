import React from 'react';
import CountUp from 'react-countup';

const Hospital = () => {
    return (
        <div className='bg-primary d-flex flex justify-content-evenly p-5 text-white mt-5'>
            <div className='text-center'>
              <h1>3468</h1>
              <h4>Hospital Rooms</h4>
            </div>
            <div className='text-center'>
                <h1><CountUp start={0} delay={4} end={553} /></h1>
                <h4>Specialist Doctors</h4>
            </div>
            <div className='text-center'>
                <h1>
                <CountUp start={0} end={100} delay={0}>
                {({ countUpRef }) => (
                    <div>
                    <span ref={countUpRef} />
                    </div>
                )}
                </CountUp>
                </h1>
                <h4>Happy Patients</h4>
            </div>
            <div className='text-center'>
                <h1>32</h1>
                <h4>Years of Experience</h4>
            </div>
    
        </div>
    );
};

export default Hospital;