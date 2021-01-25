import React from 'react';
import ErrorBoundary from '../utility/ErrorBoundary';
import Header from './Header';
import Footer from './Footer';
import styles from './_MasterTemplate.module.scss';

const MasterTemplate = ({ children }: MasterTemplateProps): React.ReactElement => {
    return (
        <div className={styles.root}>
            <div>
                <Header />
                <main>
                    <ErrorBoundary>
                        {children}
                    </ErrorBoundary>
                </main>
            </div>
            <Footer />
        </div>
    );
}

type MasterTemplateProps = {
    children: React.ReactElement;
};

export default MasterTemplate;
