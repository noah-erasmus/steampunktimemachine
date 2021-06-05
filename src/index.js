import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto';
import TimeMachine from './TimeMachine';
import {StageContext, StageProvider, useStage, StageConsumer} from './StageContext';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js';

ReactDOM.render(
  <React.StrictMode>
    <StageProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <TimeMachine />
      </ThemeProvider>
      
    </StageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
