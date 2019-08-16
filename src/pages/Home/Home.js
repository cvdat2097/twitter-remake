import React from 'react';

import NavBar from './NavBar';

import './Home.scss';

class Home extends React.Component {
    render() {
        return (
            <div id="home-page-container" className="row no-gutters">
                <div className="col-auto col-xl-3">
                    <NavBar />
                </div>
                <div className="col col-sm ">
                    <section id="main">
                        <div className="tw-header border border-primary">
                            POST HEADER
                        </div>
                        <div className="border border-danger">POSTS</div>
                    </section>
                </div>
                <div className="col-md-4 d-none d-md-block">
                    <section id="suggestion">
                        <div className="tw-header border border-primary">
                            SUGGESTION HEADER
                        </div>
                        <div className="border border-danger">SUGGESTION</div>
                    </section>
                    <footer className="border border-success">
                        &copyright; Twitter - Remaked by D
                    </footer>
                </div>
            </div>
        );
    }
}

export default Home;
