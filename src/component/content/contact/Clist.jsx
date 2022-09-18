// import { clear } from "@testing-library/user-event/dist/clear";
import { useParams, useNavigate } from "react-router-dom";
import { getc, clearc } from '../../../data';
import { getallcontact } from '../../../services/contactservices';
import { useState, useEffect } from 'react';


const Clist = () => {

	const params = useParams();
	// const c = getc(parseInt(params.cid));

	// console.log("cont id >>", params.cid);

	let [recdata, setRecdata] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				let { data } = await getallcontact();
				setRecdata(data);
				console.log("دیتای c", data);

			} catch (err) {
				console.log('مشکل دریافت دیتا');
			}

		};
		fetchData();
	}, []);

	console.log("دیتای d", recdata);


	const filt = recdata.filter(c => {
		return c.id === parseInt(params.cid);
	});

	let show = filt.map(c => {
		return c
	})

	console.log("filt", filt);
	console.log("show", show[0]);




	if (show) {

		return (
			<div className="p-5 m-2  Sticky-top border" >
				<p>  مخاطب شماره {params.cid}</p>
				{/* <p>نام: {show[0].fullname}</p> */}
				{/* <p>شغل: {filt[0].job}</p> */}
				{/* <p>موبایل: {filt[0].mobile}</p> */}
			</div >
		)

	} else {

		return (
			<div className="p-5 m-2 " style={{
				borderRadius: '25px',
				backgroundColor: '#a2d2ff'
			}}>
				<p> مخاطب وجود ندارد</p>

			</div >
		)
	}










}
export default Clist;