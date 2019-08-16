import React from 'react';

import './Home.scss';

class Home extends React.Component {
    render() {
        return (
            <div id="home-page-container" className="row no-gutters">
                <div className="col-auto col-sm-3">
                    <section id="nav-bar">
                        <div className="tw-header border border-primary">
                            NAV HEADER
                        </div>
                        <div className="border border-danger">NAV LINKS</div>
                    </section>
                </div>
                <div className="col col-sm-11 col-md-7 ">
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
