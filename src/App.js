import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './components/utils/AppRouter';
import NavBar from './pages/NavBar';
import routes from './config/routes';
import { TransProvider } from './lib/transtor';

import store from './core/store';

import LanguagePack_EN from './locales/en-US';
import LanguagePack_VI from './locales/vi-VN';

window.store = store;

const dictionary = {
    en: LanguagePack_EN,
    vi: LanguagePack_VI,
};

const App = () => {
    return (
        <React.StrictMode>
            <TransProvider dictionary={dictionary} language="vi">
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
            </TransProvider>
        </React.StrictMode>
    );
};

export default App;
