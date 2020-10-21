import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './MasterTemplate.scss';

function MasterTemplate({ children }) {
    return (
        <div className="master-template">
            <div>
                <Header />
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default MasterTemplate;
