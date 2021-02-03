import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from '../components/utility/ErrorBoundary';
import HomePage from './HomePage';
import SongResult from './SongResult';
import AboutUs from './AboutUs';
import ErrorPage from './ErrorPage';

const Routes = (): React.ReactElement => (
    <ErrorBoundary>
        <Switch>
            <Route
                exact
                path={'/'}
                component={HomePage}
            />
            <Route
                exact
                path={'/about-us'}
                component={AboutUs}
            />
            <Route
                exact
                path={'/songs/:id'}
                component={SongResult}
            />
            <Route
                component={ErrorPage}
            />
        </Switch>
    </ErrorBoundary>
);

export default Routes;
