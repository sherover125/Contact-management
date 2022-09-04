// import { clear } from "@testing-library/user-event/dist/clear";
import { useParams, useNavigate } from "react-router-dom";
import { getc, clearc } from '../../../data';

const Clist = () => {
	const params = useParams();
	const c = getc(parseInt(params.cid));
	const Navigate = useNavigate();

	if (c) {
		const btnfunc = () => {
			clearc(c.number);
			Navigate('/list');
		};

		const style = {
			borderRadius: '25px',
			backgroundColor: '#a2d2ff'
		};

		return (

			<div className="p-5 m-2  Sticky-top" style={style}>
				<p>  مخاطب شماره {params.cid}</p>
				<p>نام: {c.name}</p>
				<p>نشان: {c.family}</p>
				<p>سن: {c.age}</p>
				<button className="btn btn-danger" onClick={btnfunc}>حذف مخاطب</button>
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