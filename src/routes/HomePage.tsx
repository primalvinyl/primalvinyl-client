import React from 'react';
import MasterTemplate from '../components/_MasterTemplate';
import SearchForm from '../components/presentation/SearchForm';
import styles from './HomePage.module.scss';

const HomePage = (): React.ReactElement => {
    return (
        <MasterTemplate>
            <article className={styles.root}>
                <div className={styles.wrapper}>
                    <h2>Home Page</h2>
                    <SearchForm />
                </div>
            </article>
        </MasterTemplate>
    );
};

export default HomePage;
