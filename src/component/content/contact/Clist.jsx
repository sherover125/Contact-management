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
				<p className="">  مخاطب شماره {params.cid}</p>
				<p className="">نام: {c.name}</p>
				<p className="">نشان: {c.family}</p>
				<p className="">سن: {c.age}</p>

			</div >
		)
	}
	else {
		return (
			<div className="p-5 m-2 " style={{
				borderRadius: '25px',
				backgroundColor: '#a2d2ff'
			}}>
				<p className=""> مخاطب وجود ندارد</p>

			</div >
		)
	}



}

export default Clist;