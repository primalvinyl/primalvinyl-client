import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getArtists } from '../actions';
import MasterTemplate from '../components/MasterTemplate';
import Input from '../components/Input';
import './HomePage.scss';

const HomePage = () => {
    const dispatch = useDispatch();
    const searchRef = useRef(null);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(getArtists(searchRef.current.value));
    };

    return (
        <MasterTemplate>
            <article className="home-page">
                <div className="wrapper">
                    <h2>Home Page</h2>
                    <div>
                        <Input type="text" name="search" ref={searchRef} />
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
