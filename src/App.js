import React from 'react';
import store from './redux/store';

import HomePage from './pages/Home';

import './App.scss';

window.store = store;

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <HomePage />
            </div>
        );
    }
}

export default App;
