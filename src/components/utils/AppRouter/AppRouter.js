import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router';

const getRouteComponents = routes => {
    return routes.map(r => {
        const { path, component, redirect, routes: subRoutes } = r;

        let routeComponent = null;

        if (redirect) {
            routeComponent = (
                <Route
                    exact
                    path={path}
                    render={() => <Redirect to={redirect} />}
                />
            );
        } else {
            routeComponent = <Route exact path={path} component={component} />;
        }

        const subRouteComponents = subRoutes && getRouteComponents(subRoutes);

        // Use Array because children of <Switch /> must be <Route /> or <Redirect />
        return [subRouteComponents, routeComponent];
    });
};

const AppRouter = ({ routes }) => <Switch>{getRouteComponents(routes)}</Switch>;

AppRouter.propTypes = {
    routes: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string,
            component: PropTypes.elementType,
            render: PropTypes.elementType,
            redirect: PropTypes.string,
        })
    ),
};

export default AppRouter;
