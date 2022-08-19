import { Link, Outlet } from 'react-router-dom';
import { getlist } from '../../data';
const List = () => {
	const list = getlist();
	return (

		<div className="container  d-flex flex-wrap p-0 my-5 ">
			<div style={{ borderLeft: "solid 2px red" }} className="col-sm-4 col-12 p-2">
				{
					list.map(data => {
						return (
							<Link to={`/list/${data.number}`} key={data.number} className='d-flex btn btn-dark my-2 hover-red' style={{}}>
								{`${data.name} ${data.family}`}
							</Link>
						)
					})

				}
			</div>
			<div className='col-12 col-sm-8  border-success '>
				<Outlet />
			</div>
		</div>
	)
}

export default List;