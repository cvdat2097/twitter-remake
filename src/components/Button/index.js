import React from 'react';

class Button extends React.Component {
    render() {
        const { children } = this.props;
        return <button className="btn btn-primary">&times; {children}</button>;
    }
}

export default Button;
