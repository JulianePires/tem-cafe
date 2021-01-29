import React from 'react';
import styled from 'styled-components';

const InputBase = styled.input`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 2px solid #c43e00;
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 15px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 25px;
    font-family: 'Balsamiq Sans', cursive;
    outline: 0;

    &::-webkit-input-placeholder{
      color: #c43e00;
    }
`;

// eslint-disable-next-line react/prop-types
export default function Input({ onChange, placeholder, ...props }) {
  return (
    <>
      <div>
        <InputBase
          onChange={onChange}
          placeholder={placeholder}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        />
      </div>
    </>
  );
}
