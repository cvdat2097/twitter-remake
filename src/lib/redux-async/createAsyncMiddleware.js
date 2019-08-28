export default asyncReducer => {
    return ({ getState }) => next => action => {
        const { isAsync } = action;

        if (isAsync) {
            asyncReducer({ state: getState(), dispatch: next }, action);
        } else {
            next(action);
        }
    };
};
