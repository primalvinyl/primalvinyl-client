import React from 'react';
import MasterTemplate from '../components/MasterTemplate';
import SearchForm from '../components/SearchForm';
import './HomePage.scss';

const HomePage = () => {
    return (
        <MasterTemplate>
            <article className="home-page">
                <div className="wrapper">
                    <h2>Home Page</h2>
                    <SearchForm />
                </div>
            </article>
        </MasterTemplate>
    );
};

export default HomePage;
