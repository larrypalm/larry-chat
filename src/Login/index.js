import React, { useEffect, useReducer, useContext } from 'react';
import styled from '@emotion/styled';
import { auth } from 'libs/firebase.js';
import { AppContext } from 'state/contexts/AppContext';
import UserReducer from 'state/reducers/UserReducer';

const LoginWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

const Form = styled('form')`
    display: flex;
    flex-direction: column;
`;

const Header = styled('h1')``;

const Button = styled('button')``;

const initState = {
    username: '',
    password: '',
    error: '',
    loading: false,
    loggedIn: false
};

const Login = () => {
    const [state, dispatch] = useReducer(UserReducer, initState);
    const { username, password, error, loading, loggedIn } = state;
    // auth.signInWithEmailAndPassword('lol@lol.se', 'heasdasdasdsaaj');
    // const res = auth.createUserWithEmailAndPassword('lol@lol.se', 'heasdasdasdsaaj');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                dispatch({ type: 'success' });
            }
        });
    }, [loggedIn]);

    const handleSubmit = async e => {
        e.preventDefault();
        e.stopPropagation();
        // const buttonClicked = document.activeElement.id;

        dispatch({ type: 'login' });

        try {
            await auth.signInWithEmailAndPassword(username, password);
            dispatch({ type: 'success' });
        } catch (error) {
            dispatch({ type: 'error', error: 'Invalid user or password' });
        }
    };

    const val = useContext(AppContext);
    // console.log(val)
    return (
        <LoginWrapper>
            <Header>
                Welcome!
            </Header>
            <Form
                className="form"
                onSubmit={handleSubmit}
            >
                <input
                    placeholder="Username"
                    type="text"
                    onChange={e => dispatch({ type: 'field', field: 'username', value: e.currentTarget.value })}
                />
                <input
                    placeholder="Password"
                    type="password"
                    onChange={e => dispatch({ type: 'field', field: 'password', value: e.currentTarget.value })}
                />
                <Button type="submit" id="login">
                    Login
                </Button>
            </Form>
            {loggedIn && (
                <Button
                    onClick={() => {
                        dispatch({ type: 'logout' });
                        auth.signOut();
                    }}
                >
                    Sign out
                </Button>
            )}
        </LoginWrapper>
    );
};

export default Login;
