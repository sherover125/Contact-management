const Contact = () => {
	return (
		<div className="card   flex-row col-sm-12 col-lg-5 rounded m-0 my-3  justify-content-center " >

			<div className=" col-4  flex-column justify-content-center d-flex px-2">
				{/* <img src="./img/male.jpg" className="card-img" alt="" ></img> */}
				<img src="./img/neon.jpg" className="card-img" alt="" ></img>

			</div>

			<div className=" col-6 ">
				<div className="card-body p-1">
					<h5 className="card-title">مخاطب شماره 1</h5>
					<input type="text" value={' نام:'} className="rounded-5 my-1 form-control" />
					<input type="text" value={'نام خانواگی:'} className="rounded-5 my-1 form-control" />
					<input type="text" value={'شماره تلفن:'} className="rounded-5 my-1 form-control" />
					<input type="text" value={'ایمیل:'} className="rounded-5 my-1 form-control " />
				</div>
			</div>

			<div className="col col-1  d-flex flex-column justify-content-evenly rounded ">
				<a href="#" className="btn btn-primary "><i class="fas fa-eye "></i></a>
				<a href="#" className="btn btn-warning"><i class="fas fa-pencil-alt"></i></a>
				<a href="#" className="btn btn-danger"><i class="fas fa-trash"></i></a>
			</div>

		</div >
	)
}

export default Contact;