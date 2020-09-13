import React from 'react';
import UserReducer from 'state/reducers/UserReducer';

const initialState = {
  user: [],
};

const StoreProvider = (props) => {
	const [state, dispatch] = React.useReducer(UserReducer, initialState);
	const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};

export default StoreProvider;