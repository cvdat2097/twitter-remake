// import ACTION_TYPE from './type';

const INITIAL_STATE = {
    currentAccount: {
        name: 'Admin',
        username: 'admin1564',
    },
};

export default (state = INITIAL_STATE, action) => {
    const { type } = action;

    switch (type) {
        default:
            return state;
    }
};
