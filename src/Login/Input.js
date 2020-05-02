import React from 'react';
import styled from '@emotion/styled';

const InputField = styled('input')`
    outline: none;
`;

const Input = ({ placeholder, type }) => {
    return (
        <InputField placeholder={placeholder} type={type} />
    );
};

export default Input;
