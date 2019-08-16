import React from 'react';

import Button from '../../components/Button';
import topTweet from '../../assets/svg/top-tweet.svg';

const HomeHeader = () => {
    return (
        <div className="h-100 d-flex align-items-center p-3">
            <h1 className="h5 m-0 font-weight-bold">Home</h1>
            <Button className="ml-auto" icon={topTweet} />
        </div>
    );
};

export default HomeHeader;
