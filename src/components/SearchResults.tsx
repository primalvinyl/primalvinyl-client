import React from 'react';
import { useDispatch } from 'react-redux';
import { getArtists } from '../store/actions';
import styles from './SearchResults.module.scss';

const SearchResults = (): React.ReactElement => {
    const dispatch = useDispatch();

    return (
        <section className={styles.root}>
            Search Results
        </section>
    );
};

export default SearchResults;
