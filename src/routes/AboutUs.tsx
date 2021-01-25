import React from 'react';
import MasterTemplate from '../components/presentation/_MasterTemplate';
import styles from './AboutUs.module.scss';

const AboutUs = (): React.ReactElement => {
    return (
        <MasterTemplate>
            <div className={styles.root}>
                <div className={styles.wrapper}>
                    <h2>About Us</h2>
                </div>
            </div>
        </MasterTemplate>
    );
};

export default AboutUs;
