import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { AuthProvider } from './context/auth';

//routing ki functionality ko enable ker den gay 
const root = ReactDOM.createRoot(document.getElementById('root'));//root pulc may se index file se get kiya ha
root.render(
<AuthProvider>
<BrowserRouter>
     <App />
</BrowserRouter>
</AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
