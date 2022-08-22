import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './component/header/navbar/Navbar';
import Contacts from './component/content/contact/Contacts';
import Addbtn from './component/header/btns/Addbtn';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './component/content/About';
import List from './component/content/List';
import Clist from './component/content/contact/Clist';
import Error from './component/Error';
import { x } from './component/content/List';
console.log(x);
const App = () => {
	const [getcontacts, setcontacts] = useState([]);
	const [preloader, getpreloader] = useState(true);
	return (
		<>
			<Routes>
				<Route path='/' element={[<Navbar />]}>
					<Route path='/' element={<Contacts contacts={getcontacts} preloader={preloader} />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route path='/list' element={<List />} >
						<Route index element={
							< div className='container justify-content-center d-flex Sticky-top'>
								<img src={require('./assets/clist.jpg')} alt="" className='w-75' style={{ opacity: '0.5', }} />
							</div>
						} />
						<Route path='/list/:cid' element={<Clist />} />
					</Route>

				</Route>
				<Route path='*' element={<Error />} />
			</Routes>
		</>
	)
}

export default App;