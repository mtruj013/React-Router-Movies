import React from 'react';
import ReactDOM from 'react-dom';
//step 1: import router
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(

    //step2: wrap app in router
   <Router>
     <App />   
   </Router>, document.getElementById('root'));
