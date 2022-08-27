import { NavLink, Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { getlist } from '../../data';

const List = () => {
	const list = getlist();
	let [SearchParams, setSearchParams] = useSearchParams();
	let location = useLocation();

	const listFilter = data => {
		let filter = SearchParams.get("input");
		if (filter) {
			return data.name.startsWith(filter) || data.family.startsWith(filter);
		} else {
			return true;
		}
	};

	const onsearch = event => {
		let input = event.target.value;
		if (input) {
			setSearchParams({ input });
		} else {
			setSearchParams({});
		}
	};

	const maplist = data => {

		return (
			<NavLink to={`/list/${data.number}${location.search}`} key={data.number} className='d-flex btn btn-dark my-2 '
				style={({ isActive }) => {
					return {
						backgroundColor: isActive ? "green" : "",
						boxShadow: isActive ? "0px 0px 15px 5px green" : "",
					};
				} }>
				{`${data.name} ${data.family}`}
			</NavLink>
		);
	};
	return (
		<div className="container  d-flex flex-wrap p-0 my-5 ">

			<div style={{ borderLeft: "solid 2px red" }} className="col-sm-4 col-12 p-2">

				<input type="text" placeholder='جستجوی مخاطب' className='form-control my-1 border border-danger'
					onChange={onsearch}
					style={{
						boxShadow: '0px 0px 15px red'
					}}
				>
				</input>

				{list.filter(listFilter).map(maplist)}

			</div>

			<div className='col-12 col-sm-8  border-success '>
				<Outlet />
			</div>

		</div>
	)
}

export default List;
