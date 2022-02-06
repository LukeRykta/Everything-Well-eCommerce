import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 The function below is the root of our React front-end. the render function is constantly refreshing <App/>
 which is linked to App.js . There we are routing our views and in our views we are updating our components.
 This is the current hierarchy, but it may change depending on how we decide to move forward with page creation
 and management. -Luke
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
