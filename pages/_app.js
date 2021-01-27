/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import PropTypes from 'prop-types';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Balsamiq Sans', cursive;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  
  html, body {
    min-height: 100vh;
  }
  
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  input{
    width: 100%;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 2px solid #c43e00;
    border-radius: 4px;
    padding-left: 16px;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 24px;
    font-family: 'Balsamiq Sans', cursive;

    &::-webkit-input-placeholder{
      color: #c43e00;
    }
  }

  textarea:focus, input:focus, select:focus {
    outline: 0;
  }

  button{
    width: 100%;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    border: none;
    text-align: center;
    color: #ffa040;
    font-family: 'Balsamiq Sans', cursive;

    &:disabled{
      background: #3e2723;
      color: #6a4f4b;
    }
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.string.isRequired,
};
