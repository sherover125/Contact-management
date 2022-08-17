import { Link } from 'react-router-dom'
const Addbtn = () => {
	return (
		<div className=" border-danger py-2  d-flex">

			<div className=" col-6 d-flex justify-content-center">
				<div className="justify-content-center  d-flex border">
					<button className="btn btn-danger  ">افزودن مخاطبین
						<i class="fa-solid fa-user-plus mx-2"></i>
					</button>
				</div>

			</div>
			<div className=" col-6  d-flex justify-content-center align-items-center">
				<Link to='./email' className='btn btn-primary mx-1'>درباره برنامه</Link>
				<Link to='./email' className='btn btn-primary mx-1'>لیست</Link>
				<Link to='./email' className='btn btn-primary mx-1'>صفحه اصلی</Link>
			</div>



		</div>
	)
}

export default Addbtn;