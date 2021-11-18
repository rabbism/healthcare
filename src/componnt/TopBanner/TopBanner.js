import React from 'react';
import './TopBanner.css'

const TopBanner = () => {
    return (
      <div className='top-style'>
            <div className='top-banner p-5'>
            <div className='m-5 w-50'>
            <h4>BEST CONSULTANTS</h4>
            <h1>Best Doctors and</h1>
            <h1>Facilities</h1>
            <h1>in Town</h1>
            <p>Orthodontics is the branch of dentistry that corrects teeth and We work hard to ensure
        
            that no one goes without the care they need. Help us in our mission.</p>
            <button className='btn btn-primary'>Learn More</button>
            </div>
        </div>
      </div>
    );
};

export default TopBanner;