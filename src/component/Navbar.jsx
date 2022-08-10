import Search from "./content/Searchbox";
import Logo from "./content/Logo";

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