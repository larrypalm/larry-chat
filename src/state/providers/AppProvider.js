import React, { useReducer } from 'react';
import { AppContext } from 'state/contexts/AppContext';
import AppReducer from 'state/reducers/AppReducer';
import { resolveApp } from 'state/actions/AppActions';
import UserReducer from 'state/reducers/UserReducer';

const initState = {
    val: 0,
    loggedIn: false,
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initState);

    const value = {
        val: state.val,
        resolveApp,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;