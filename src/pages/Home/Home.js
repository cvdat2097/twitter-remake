import React from 'react';

import Button from '../../components/Button';

class Home extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <h1>Twitter Remake</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Doloribus nisi vero quia in dicta illum eos enim
                        quo harum, magni soluta, debitis magnam. Voluptatem
                        possimus laudantium quod id, itaque animi.
                    </p>
                    <Button>Hello</Button>
                </div>
            </div>
        );
    }
}

export default Home;
