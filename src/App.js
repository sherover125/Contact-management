
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './component/header/navbar/Navbar';
import Contacts from './component/content/contact/Contacts';
import Addbtn from './component/header/btns/Addbtn';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Aboute from './component/content/Aboute'

const App = () => {
	const [getcontacts, setcontacts] = useState([]);
	const [preloader, getpreloader] = useState(true);
	return (
		<>
			<Routes>
				<Route path='/' element={[<Navbar />]}>
					<Route path='/' element={<Contacts contacts={getcontacts} preloader={preloader} />}></Route>
					<Route path='/about' element={<Aboute />}></Route>
				</Route>
			</Routes>
		</>
	)
}

export default App;