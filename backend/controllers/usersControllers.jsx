const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/usersModel.jsx");

const createAccessToken = (userId) => {
	return jwt.sign(userId, process.env.ACCESS_TOKEN, { expiresIn: "1d" });
};

const createRefreshToken = (userId) => {
	return jwt.sign(userId, process.env.REFRESH_TOKEN, { expiresIn: "2d" });
};

exports.usersController = {
	getUsers: async (req, res) => {
		try {
			const { role } = req.query;
			if (role) {
				const allUsers = await UserModel.find({
					role: {
						$in: role === "User" ? ["User"] : ["Admin"],
					},
				});
				return res.status(200).json({ allUsers });
			}
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	addAdmin: async (req, res) => {
		try {
			const { role } = req.body;
			const adminUser = await UserModel.findByIdAndUpdate(req.params.id, {
				role,
			});
			res.status(200).json({ msg: adminUser });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	deleteUser: async (req, res) => {
		try {
			await UserModel.findByIdAndDelete(req.params.id);
			res.status(200).json({ msg: `${req.params.id} item deleted` });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	login: async (req, res) => {
		try {
			const { email, password } = req.body;
			const errs = await handleErr(email, password);
			if (Object.keys(errs).length > 0) {
				return res.status(400).json({ msg: errs });
			}
			const user = await UserModel.findOne({ email });
			const access_token = createAccessToken({ id: user._id });
			const refresh_token = createRefreshToken({ id: user._id });
			res.cookie("refreshToken", refresh_token, {
				httpOnly: true,
				path: `http://${req.headers.host}/api/refresh_token`,
				maxAge: 3 * 24 * 3600 * 1000,
			});
			res.status(200).json({ user, token: access_token, msg: "logged in" });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	refreshToken: async (req, res) => {
		try {
			const rToken = req.cookies.refreshToken;
			if (!rToken) {
				res.status(400).json({ msg: "Please enter loggin" });
			}
			jwt.verify(rToken, process.env.REFRESH_TOKEN, async (err, result) => {
				if (err) return res.status(400).json({ msg: "Please enter login" });
				const user = await UserModel.findById(result.id);
				const access_token = createAccessToken({ id: user._id });
				res.status(200).json({ user, token: access_token });
			});
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

}
const handleErr = async (email, password) => {
	const errs = {};
	const emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (!email) {
		errs.email = "please enter your email";
	} else if (!email.match(emailValidator)) {
		errs.email = "please check your email";
	} else if (email) {
		const user = await UserModel.findOne({ email });
		if (!user) {
			errs.email = "unregistered email";
		} else {
			const passMatch = await bcrypt.compare(password, user.password);
			if (!passMatch) {
				errs.password = "password not recognised";
			}
		}
	}
	if (!password) {
		errs.password = "please enter your password";
	}
	return errs;
}
