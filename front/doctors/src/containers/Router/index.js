import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import DoctorsForm from '../DoctorsForm';

export const routes = {
    home: "/",
    doctorsForm: '/doctor'
};

function Router(props) {
    return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.home} component={HomePage} />
                <Route exact path={routes.doctorsForm} component={DoctorsForm} />
            </Switch>
        </ConnectedRouter>
    )
};

export default Router;