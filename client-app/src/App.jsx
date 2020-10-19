import React from 'react';
import { BreakpointProvider } from './utilities/BreakpointProvider';
import logo from './images/logo.svg';
import './App.scss';

function App() {
    return (
        <div className="App">
            <BreakpointProvider>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Edit <code>src/App.js</code> and save to reload.</p>
                </header>
            </BreakpointProvider>
        </div>
    );
}

export default App;
