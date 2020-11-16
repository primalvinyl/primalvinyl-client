import React from 'react';
import MasterTemplate from '../components/_MasterTemplate';
import SearchForm from '../components/presentation/SearchForm';
import './HomePage.scss';

const HomePage = (): React.ReactElement => {
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
