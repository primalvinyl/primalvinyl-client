import React from 'react';
import MasterTemplate from '../components/MasterTemplate';
import './AboutUs.scss';

const AboutUs = (): React.ReactElement => {
    return (
        <MasterTemplate>
            <div className="about-us">
                <div className="wrapper">
                    <h2>About Us</h2>
                </div>
            </div>
        </MasterTemplate>
    );
};

export default AboutUs;
