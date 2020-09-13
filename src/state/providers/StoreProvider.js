import React, { useReducer } from 'react';
import { StoreContext } from 'state/contexts/StoreContext';
import StoreReducer from 'state/reducers/StoreReducer';
import { resolveApp } from 'state/actions/AppActions';
import UserReducer from 'state/reducers/UserReducer';

const initState = {
    val: 0,
    user: {
        loggedIn: false
    },
};

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(StoreReducer, initState);

    return (
        <StoreContext.Provider value={{ app: { ...state, dispatch }, lame: 'lame'}}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;