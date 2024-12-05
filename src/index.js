import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from "axios";
axios.defaults.withCredentials = true;

/* App.js에서 모아둔 페이지를 index.js에서 랜더링하여 페이지를 출력시킨다 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

