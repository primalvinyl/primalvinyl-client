import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import SearchPage from './SearchPage';
import AboutUs from './AboutUs';
import ErrorPage from './ErrorPage';

const Routes = (): React.ReactElement => (
    <ErrorBoundary>
        <Switch>
            <Route
                exact
                path={'/'}
                component={SearchPage}
            />
            <Route
                exact
                path={'/about-us'}
                component={AboutUs}
            />
            <Route
                path={'/search/:query'}
                component={SearchPage}
            />
            <Route
                path={'/search'}
                component={SearchPage}
            />
            <Route
                exact
                path={'/songs/:id'}
                component={SearchPage}
            />
            <Route
                component={ErrorPage}
            />
        </Switch>
    </ErrorBoundary>
);

export default Routes;
