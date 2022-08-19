
const list = [
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
	{
		name: "ملیکا",
		number: 3,
		family: "محمدی",
		age: 43,
	},
	{
		name: "نگین",
		number: 4,
		family: "عباسی",
		age: 8,
	},
	{
		name: "امیر",
		number: 5,
		family: "مومنی",
		age: 20,
	},
];

export const getlist = () => {
	return list;
};

export const getc = (number) => {
	return list.find((c) => c.number === number);

};

