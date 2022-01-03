import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

ReactDOM.render( <App /> , document.getElementById('root'));
