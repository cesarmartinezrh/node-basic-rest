const getUsers = (req, res) => {
	
	const { q = '', width = '', other = '' } = req.query;

	res.json({
		msg: "get API - controller",
		q,
		width,
		other
	});
};

const postUsers = (req, res) => {

	const { nombre, edad } = req.body;

	res.json({
		msg: "post API - controller",
		nombre,
		edad
	});
};

const putUsers = (req, res) => {

	const id = req.params.id;

	res.json({
		msg: "put API - controller",
		id
	});
};

const patchUsers = (req, res) => {
	res.json({
		msg: "patch API - controller",
	});
};
const deleteUsers = (req, res) => {
	res.json({
		msg: "delete API - controller",
	});
};

module.exports = {
	getUsers,
	postUsers,
	putUsers,
	patchUsers,
	deleteUsers,
};
