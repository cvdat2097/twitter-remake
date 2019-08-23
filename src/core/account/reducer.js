// import ACTION_TYPE from './type';

const INITIAL_STATE = {
    current: {
        name: 'Admin',
        username: 'admin1564',
        avatar: '/img/account-0.jpg',
        nTweets: 35,
    },
};

export default (state = INITIAL_STATE, action) => {
    const { type } = action;

    switch (type) {
        default:
            return state;
    }
};
