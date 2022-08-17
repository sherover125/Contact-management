import Search from "./Searchbox";
import Logo from "./Logo";

function Navbar() {

	return (
		<nav class="navbar navbar-dark navbar-expand-lg bg-light bg-dark shadow-lg" dir="rtl" >

			<div class="container">

				<Logo />

				<Search />


			</div >
		</nav >



	);
}

export default Navbar;