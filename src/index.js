import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { createGlobalStyle } from 'styled-components';

import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Graphik;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/graphik-regular.woff) format("woff"), url(/graphik-regular.woff2) format("woff2")
  }

  @font-face {
    font-family: Graphik;
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(/graphik-regular-italic.woff) format("woff"), url(/graphik-regular-italic.woff2) format("woff2")
  }

  @font-face {
    font-family: Graphik;
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(/graphik-medium.woff) format("woff"), url(/graphik-medium.woff2) format("woff2")
  }

  @font-face {
    font-family: Trump Soft Pro;
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(/trump-soft-pro-bold.woff) format("woff"), url(/trump-soft-pro-bold.woff2) format("woff2")
  }

  @font-face {
    font-family: Shentox;
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(/shentox-medium.woff) format("woff"), url(/shentox-medium.woff2) format("woff2")
  }

  @font-face {
    font-family: TNW Avalon;
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(/tnw-avalon-bold.woff) format("woff"), url(/tnw-avalon-bold.woff2) format("woff2")
  }

  body {
    font-family: 'Graphik', sans-serif;
    font-size:1rem;
    line-height:1.5;
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
