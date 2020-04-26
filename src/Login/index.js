import React from 'react';
import styled from '@emotion/styled';
import Input from './Input';

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

const Login = () => {
    return (
        <LoginWrapper>
            <Header>
                Welcome!
            </Header>
            <Form
                onSubmit={e => {
                    e.preventDefault();
                }}
            >
                <Input placeholder="Username" type="text" />
                <Input placeholder="Password" type="password" />
                <Button type="submit">
                    Login
                </Button>
            </Form>
        </LoginWrapper>
    );
};

export default Login;
