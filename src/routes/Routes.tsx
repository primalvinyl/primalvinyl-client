import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import ErrorPage from './ErrorPage';

const Routes = (): JSX.Element => (
    <ErrorBoundary>
        <Switch>
            <Route
                exact
                path={'/'}
                component={HomePage}
            />
            <Route
                path={'/about-us'}
                component={AboutUs}
            />
            <Route
                component={ErrorPage}
            />
        </Switch>
    </ErrorBoundary>
);

export default Routes;
