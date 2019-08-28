import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './components/utils/AppRouter';
import NavBar from './pages/NavBar';
import routes from './config/routes';
import { TransProvider } from './lib/transtor';

import DevSettings from './DevSettings';

import store from './core/store';

import LanguagePack_EN from './locales/en-US';
import LanguagePack_VI from './locales/vi-VN';

import './stylesheet/theme-blue.scss';
// import * as purpleTheme from './stylesheet/theme-purple.scss';

window.store = store;

const dictionary = {
    en: LanguagePack_EN,
    vi: LanguagePack_VI,
};

const App = () => {
    const [langage, setLanguage] = useState('en');

    const onChangeLanguage = lang => {
        setLanguage(lang);
    };

    return (
        <React.StrictMode>
            <Provider store={store}>
                <TransProvider dictionary={dictionary} language={langage}>
                    <BrowserRouter>
                        <div className="fluid-container">
                            <div
                                id="home-page-container"
                                className="row no-gutters"
                            >
                                <div className="col-auto col-xl-3">
                                    <NavBar />

                                    <DevSettings
                                        onChangeLanguage={onChangeLanguage}
                                    />
                                </div>

                                <div className="col col-xl-11">
                                    <AppRouter routes={routes} />
                                </div>
                            </div>
                        </div>
                    </BrowserRouter>
                </TransProvider>
            </Provider>
        </React.StrictMode>
    );
};

export default App;
