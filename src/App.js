import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './components/utils/AppRouter';
import NavBar from './pages/NavBar';
import routes from './config/routes';

import store from './core/store';

window.store = store;

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

                                <div className="col col-xl-11">
                                    <AppRouter routes={routes} />
                                </div>
                            </div>
                        </div>
                    </BrowserRouter>
                </Provider>
            </React.StrictMode>
        );
    }
}

export default App;
