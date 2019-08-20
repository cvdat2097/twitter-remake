import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import store from './core/store';

import NavBar from './pages/NavBar';
import HomePage from './pages/Home';

import './App.scss';

window.store = store;

// TODO: render Routes from routes config
class App extends React.Component {
    render() {
        return (
            <React.StrictMode>
                <Provider store={store}>
                    <BrowserRouter>
                        <div className="fluid-container">
                            <div
                                id="home-page-container"
                                className="row no-gutters"
                            >
                                <div className="col-auto col-xl-3">
                                    <NavBar />
                                </div>
                                <Switch>
                                    <Redirect exact path="/" to="/home" />
                                    <Route path="/home" component={HomePage} />
                                    <Route
                                        path="/explore"
                                        render={() => <div>Explore Page</div>}
                                    />
                                    <Route
                                        path="/notification"
                                        render={() => (
                                            <div>Notification Page</div>
                                        )}
                                    />
                                    <Route
                                        path="/messages"
                                        render={() => <div>messages Page</div>}
                                    />
                                    <Route
                                        path="/bookmark"
                                        render={() => <div>bookmark Page</div>}
                                    />
                                    <Route
                                        path="/list"
                                        render={() => <div>List Page</div>}
                                    />
                                    <Route
                                        path="/profile"
                                        render={() => <div>Profile Page</div>}
                                    />

                                    <Route
                                        render={() => <div>404 NOT FOUND</div>}
                                    />
                                </Switch>
                            </div>
                        </div>
                    </BrowserRouter>
                </Provider>
            </React.StrictMode>
        );
    }
}

export default App;
