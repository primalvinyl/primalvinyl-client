import React from 'react';
import MasterTemplate from '../components/MasterTemplate';
import './HomePage.scss';

const HomePage = () => {
    return (
        <MasterTemplate>
            <div className="home-page">
                <div className="wrapper">
                    <h2>Home Page</h2>
                </div>
            </div>
        </MasterTemplate>
    );
};

export default HomePage;
