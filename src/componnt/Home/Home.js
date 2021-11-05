import React from 'react';
import Doctor from '../Docter/Doctor';
import Hospital from '../HospitalItem/Hospital';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Doctor></Doctor>
            <Hospital></Hospital>
        </div>
    );
};

export default Home;