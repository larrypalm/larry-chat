import React, { useEffect, useReducer } from 'react';
import styled from '@emotion/styled';
import { auth } from './firebase.js';

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

const loginReducer = (state, action) => {
    switch (action.type) {

        case 'field': {
            return {
                ...state,
                [action.field]: action.value
            };
        }
        case 'login': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'success': {
            return {
                ...state,
                loading: false,
                loggedIn: true,
            };
        }
        case 'logout': {
            return {
                ...state,
                loading: true,
                loggedIn: false,
                username: '',
                password: '',
            };
        }
        case 'error': {
            return {
                ...state,
                error: action.error,
                loading: false,
                loggedIn: false,
            };
        }
        default:
            break;
    }

    return state;
};

const initState = {
    username: '',
    password: '',
    error: '',
    loading: false,
    loggedIn: false
};

const Login = () => {
    const [state, dispatch] = useReducer(loginReducer, initState);
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
