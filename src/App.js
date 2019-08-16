import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import HomePage from './pages/Home';

import './App.scss';

window.store = store;

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="fluid-container">
                    <HomePage />
                </div>
            </Provider>
        );
    }
}

export default App;
