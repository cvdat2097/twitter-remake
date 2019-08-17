import React from 'react';
import { connect } from 'react-redux';
import Actions from './model/action';

import NavBar from './NavBar';
import HomeHeader from './HomeHeader';
import SearchBar from './SearchBar';


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
                        <div className="tw-header border">
                            <HomeHeader />
                        </div>
                        <div className="border border-danger">POSTS</div>
                    </section>
                </div>
                <div className="col-md-4 d-none d-md-block">
                    <section id="suggestion">
                        <div className="tw-header border border-primary d-flex align-items-center justify-content-center">
                            <SearchBar />
                        </div>
                        <div className="border border-danger">SUGGESTION</div>
                    </section>
                    <footer className="border border-success">
                        &copy; Twitter - Remaked by D
                    </footer>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ home: state.home });
const mapDispatchToProps = dispatch => ({
    sortTweets(order) {
        dispatch(Actions.changeTweetsOrder(order));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
