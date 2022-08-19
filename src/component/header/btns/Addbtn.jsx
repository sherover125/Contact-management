import { Link, Outlet } from 'react-router-dom'
const Addbtn = () => {
	return (
		<div className=" border-danger py-2  d-flex">

			<div className=" col-6 d-flex justify-content-center">
				<div className="justify-content-center  d-flex ">
					<button className="btn btn-danger  rounded">افزودن مخاطبین
						<i class="fa-solid fa-user-plus mx-2"></i>
					</button>
				</div>

			</div>
			<div className=" col-6  d-flex justify-content-center align-items-center">
				<Link to='./about' className='btn btn-primary mx-1 rounded'>درباره برنامه</Link>
				<Link to='./list' className='btn btn-primary mx-1 rounded'>لیست</Link>
				<Link to='./' className='btn btn-primary mx-1 rounded'>صفحه اصلی</Link>
			</div>
		</div>
	)
}

export default Addbtn;