import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { getlist } from '../../data';
import { search } from '../../helpers/search'
const List = () => {
	const list = getlist();
	let [SearchParams, setSearchParams] = useSearchParams();
	return (
		<div className="container  d-flex flex-wrap p-0 my-5 ">

			<div style={{ borderLeft: "solid 2px red" }} className="col-sm-4 col-12 p-2 ">

				<input type="text" placeholder='جستجوی مخاطب' className='form-control my-1'
					onChange={event => {
						let input = event.target.value;
						if (input) {
							setSearchParams({ input });
							console.log(SearchParams.get("input"))
						} else {
							setSearchParams({});
							console.log("input cleared")
						}

					}}


				></input>



				{/* {list.filter(data => {
					let filter = SearchParams.get("input");
					if (!filter) return true;
					let name = data.name;

					return name.startsWith(filter).map(data => {
						return (
							<NavLink to={`/list/${data.number}`} key={data.number} className='d-flex btn btn-dark my-2 '
								style={({ isActive }) => {
									return {
										backgroundColor: isActive ? "red" : "",
									}
								}}>
								{`${data.name} ${data.family}`}
							</NavLink>
						)
					})

				})

				} */}

				{list.map(data => {
					return (
						<NavLink to={`/list/${data.number}`} key={data.number} className='d-flex btn btn-dark my-2 '
							style={({ isActive }) => {
								return {
									backgroundColor: isActive ? "red" : "",
								}
							}}>
							{`${data.name} ${data.family}`}
						</NavLink>
					)
				})}

			</div>

			<div className='col-12 col-sm-8  border-success '>
				<Outlet />
			</div>

		</div>
	)
}

export default List;