import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import ErrorPage from './ErrorPage';

const Routes = () => (
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
);

export default Routes;
