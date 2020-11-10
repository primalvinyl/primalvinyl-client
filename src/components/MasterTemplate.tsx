import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import Footer from './Footer';
import './MasterTemplate.scss';

const MasterTemplate = ({ children }: MasterTemplateProps): React.ReactElement => {
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

type MasterTemplateProps = {
    children: React.ReactElement;
};

export default MasterTemplate;
