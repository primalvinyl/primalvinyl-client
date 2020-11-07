import React from 'react';
import { useDispatch } from 'react-redux';
import { getArtist } from '../actions';
import MasterTemplate from '../components/MasterTemplate';
import './HomePage.scss';

const HomePage = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        dispatch(getArtist('278763'));
    };
    return (
        <MasterTemplate>
            <article className="home-page">
                <div className="wrapper">
                    <h2>Home Page</h2>
                    <div>
                        <input type="text" />
                        <button onClick={handleSubmit}>
                            Search
                        </button>
                    </div>
                </div>
            </article>
        </MasterTemplate>
    );
};

export default HomePage;
