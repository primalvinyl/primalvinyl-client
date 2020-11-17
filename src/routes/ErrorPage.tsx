import React from 'react';
import styles from './ErrorPage.module.scss';

const ErrorPage = (): React.ReactElement => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <h1>404</h1>
            </div>
        </div>
    );
};

export default ErrorPage;
