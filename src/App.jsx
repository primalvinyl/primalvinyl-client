import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BreakpointProvider } from './utilities/BreakpointProvider';
import Routes from './routes/Routes';

const App = () => (
    <BrowserRouter>
        <BreakpointProvider>
            <div className="app">
                <Routes />
            </div>
        </BreakpointProvider>
    </BrowserRouter>
);

export default App;
