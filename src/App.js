
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './component/header/navbar/Navbar';
import Contacts from './component/content/contact/Contacts';
import Addbtn from './component/header/btns/Addbtn';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
	const [getcontacts, setcontacts] = useState([]);
	const [preloader, getpreloader] = useState(false);
	return (
		<>
			<Navbar />
			<Addbtn />
			<Contacts contacts={getcontacts} preloader={preloader} />
		</>
	)
}

export default App;