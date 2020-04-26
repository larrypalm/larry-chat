import React from 'react';
import Login from './Login';
import styled from '@emotion/styled';

const Body = styled('div')`
    width: 100%;
    min-height: 100vh;
    min-width: 100%;
    max-width: 2000px;
`;

const App = () => {
	return (
		<Body className="body">
			<Login />
		</Body>
	);
};

export default App;