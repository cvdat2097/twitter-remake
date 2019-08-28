export default asyncReducers => ({ state, dispatch }, action) => {
    asyncReducers.forEach(reducer => reducer({ state, dispatch }, action));
};
