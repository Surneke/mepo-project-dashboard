const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/usersModel.jsx");

exports.auth = async (req, res, next) => {
	try {
		const token = req.headers.authorization;
		if (!token) return res.status(400).json("LOGINOOO HIIII");
		const result = jwt.verify(token, process.env.ACCESS_TOKEN);
		const user = await UserModel.findOne(result.id);
		if (user.role === "Admin") {
			req.user = user;
			next();
		}
	} catch (error) {
		return res.status(500).json({ msg: error.message });
	}
};
