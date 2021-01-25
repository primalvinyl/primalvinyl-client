import React from 'react';
import MasterTemplate from '../components/presentation/_MasterTemplate';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import styles from './HomePage.module.scss';

const HomePage = (): React.ReactElement => {
    return (
        <MasterTemplate>
            <article className={styles.root}>
                <div className={styles.wrapper}>
                    <SearchForm />
                    <SearchResults />
                </div>
            </article>
        </MasterTemplate>
    );
};

export default HomePage;
