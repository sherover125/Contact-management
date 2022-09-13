import Contact from './contact';
import Spiner from '../Preloader';

const Contacts = ({ contacts, preloader }) => {
	console.log("دریافت دیتا در مخاطبین", contacts);


	const conts = contacts.length > 0 ? contacts.map((c) => (
		< Contact key={c.id} contacts={c} />
	)) :

		(
			<div className=' text-center py-2  rounded'>
				<img src={require('../../../assets/no-found.gif')} alt="notfound" className='w-50' />
				<p className='text-danger' style={{ fontSize: '25px' }}>مخاطب یافت نشد...</p>
			</div>
		);


	return (

		<div className="container p-0 d-flex flex-row flex-wrap justify-content-evenly  border-success" dir="rtl" style={{ boxSizing: "border-box" }}>

			{preloader ? <Spiner /> : (conts)}

		</div>



	)
}

export default Contacts;