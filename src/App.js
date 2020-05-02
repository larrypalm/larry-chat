import React from 'react';
import Login from './Login';
import styled from '@emotion/styled';
import { UserContext } from 'Contexts/UserContext';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams
  } from 'react-router-dom';

const Body = styled('div')`
    width: 100%;
    min-height: 100vh;
    min-width: 100%;
    max-width: 2000px;
`;

const App = () => {
	return (
		<Router>
			<UserContext.Provider value="hejsna">
				<Body className="body">
					<nav>
						<Link to="/">About</Link>
						<Link to="/gifs">Gifs</Link>
					</nav>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route exact path="/gifs" component={Login} />
						<Route exact path="/user/:name" component={Login} />
					</Switch>
				</Body>
			</UserContext.Provider>
		</Router>
	);
};

export default App;