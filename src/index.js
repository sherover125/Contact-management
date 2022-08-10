import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navbar from './component/Navbar';
import Contacts from './component/content/contact/contacts';
import Addbtn from './component/content/Addbtn'

//bootstrap
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Navbar />
    <Addbtn />
    <Contacts />
  </React.StrictMode>
);



