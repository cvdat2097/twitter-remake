import React from 'react';
import { TransContext } from './TransContext';

class TransProvider extends React.Component {
    render() {
        const { children, dictionary, language } = this.props;

        if (!language) {
            throw new Error('Language is missing');
        }

        return (
            <TransContext.Provider value={{ dictionary, language }}>
                {children}
            </TransContext.Provider>
        );
    }
}

export default TransProvider;
