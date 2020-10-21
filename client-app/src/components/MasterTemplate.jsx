import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import Footer from './Footer';
import './MasterTemplate.scss';

function MasterTemplate({ children }) {
    return (
        <div className="master-template">
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

export default MasterTemplate;
