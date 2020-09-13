import React, { useEffect, useContext } from 'react';
import Login from './Login';
import styled from '@emotion/styled';
import AppProvider from 'state/providers/AppProvider';
import { StoreContext } from 'state/contexts/StoreContext';
// import { Store } from 'state/store';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams
  } from 'react-router-dom';
import Site from './Site';

const fetchDataAction = async () => {

};

const App = () => {
	const store = useContext(StoreContext);
	console.log(store)
	useEffect(() => {
		fetchDataAction();
	}, []);

	return (
		<Router>
			<Site />
			{/* <Body className="body">
				<nav>
					<Link to="/">About</Link>
					<Link to="/gifs">Gifs</Link>
				</nav>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route exact path="/gifs" component={Login} />
					<Route exact path="/user/:name" component={Login} />
				</Switch>
			</Body> */}
		</Router>
	);
};

export default App;