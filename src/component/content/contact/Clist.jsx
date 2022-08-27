import { useParams } from "react-router-dom";
import { getc } from '../../../data';

const Clist = () => {
	const params = useParams();
	const c = getc(parseInt(params.cid));

	if (c) {
		return (
			<div className="p-5 m-2  Sticky-top" style={{
				borderRadius: '25px',
				backgroundColor: '#a2d2ff'
			}}>
				<p>  مخاطب شماره {params.cid}</p>
				<p>نام: {c.name}</p>
				<p>نشان: {c.family}</p>
				<p>سن: {c.age}</p>

			</div >
		)
	}
	else {
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