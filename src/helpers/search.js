const box = [
	{
		name: "رضا",
		number: 1,
		family: "زارعی",
		age: 21,
	},
	{
		name: "احمد",
		number: 2,
		family: "مرادی",
		age: 50,
	},

];

const filter = box.filter(data => {
	return data.number == 2;
});
console.log(filter[0]);





