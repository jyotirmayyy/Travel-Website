// Main JavaScript File

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);  OR
const root = ReactDOM.createRoot(document.getElementById("root")); // createRoot() takes an HTML element
root.render(

    <App />
    // App is a React component which we are executing after importing it in index.js where we are rendering the React code after selecting the HTML tag from .html file

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
