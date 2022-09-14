import axios from "axios";

const server_url = 'http://localhost:9000';

//get all contacts
export const getAllcontact = () => {
	const url = `${server_url}/contacts`;
	return axios.get(url);
}
// get all group
export const getAllgoup = () => {
	const url = `${server_url}/groups`;
}

