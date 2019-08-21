import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router';

const AppRoute = ({ routes }) => {
    return routes.map((r, index) => {
        const { path, component, render, redirect } = r;

        if (redirect) {
            return (
                <Route
                    key={index}
                    exact
                    path={path}
                    render={() => <Redirect to={redirect} />}
                />
            );
        }

        if (render) {
            return <Route key={index} path={path} render={render} />;
        }

        if (component) {
            return <Route key={index} path={path} component={component} />;
        }

        return null;
    });
};

const AppRouter = ({ routes }) => (
    <Switch>
        <AppRoute routes={routes} />
    </Switch>
);

AppRouter.propTypes = {
    routes: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            component: PropTypes.elementType,
            render: PropTypes.elementType,
            redirect: PropTypes.string,
        })
    ),
};

export default AppRouter;
