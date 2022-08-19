import { Link, Outlet } from 'react-router-dom';
// import aboute from '../../assets/about.png';
const Aboute = () => {
	return (
		<>
			<div className="justify-content-center d-flex flex-column container">
				{/* <Link to='/' className="btn btn-primary">صفحه اصلی</Link> */}
				{/* <button className="btn btn-primary" >صفحه اصلی</button> */}
				<h1 className=" text-center">aboute page</h1>
				<img src={require('../../assets/about.png')} alt="" className='w-100 img-thumbnail rounded' />
		</div>
			<Outlet />
		</>




	)
}
export default Aboute;
