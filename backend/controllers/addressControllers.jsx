const { AddressModel } = require("../model/addressModel.jsx");
const { UserModel } = require("../model/usersModel.jsx");

const addValidator = (country,citySoum,zipPostCode,stateProvince,apartmentSuite) => {
	const errs = {};
	if (!country) {
		errs.counry = "Please fill out this field";
	}
	if (!citySoum) {
		errs.counry = "Please fill out this field";
	}
	if (!zipPostCode) {
		errs.counry = "Please fill out this field";
	}
	if (!stateProvince) {
		errs.counry = "Please fill out this field";
	}
	if (!apartmentSuite) {
		errs.counry = "Please fill out this field";
	}
	return errs;
};

exports.addressController = {
	createNewAddress: async (req, res) => {
		try {
			const { detail, country, citySoum, zipPostCode, stateProvince, apartmentSuite } = req.body;
			const err = addValidator(country, citySoum, zipPostCode, stateProvince, apartmentSuite);
			if (Object.keys.length > 0)
				return res.status(400).json({ msg: err });
			const newAddress = new AddressModel({ owner: req.user?._id, detail, country, zipPostCode, citySoum, stateProvince, apartmentSuite, });
			await newAddress.save();
			await UserModel.findByIdAndUpdate(req.user._id, { address: newAddress._id, });
			res.status(200).json({ msg: "Address created" })
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	updateAddress: async (req, res) => {
		try {
			const { detail, country, citySoum, zipPostcode, stateProvince, apartmentSuite } = req.body;
			const err = addValidator(country, citySoum, zipPostcode, stateProvince, apartmentSuite);
			if (Object.keys.length > 0) return res.status(400).json({ msg: err });
			await AddressModel.findByIdAndUpdate({ owner: req.user?._id }, { detail, country, citySoum, zipPostcode, stateProvince, apartmentSuite })
			res.status(200).json({ msg: "Address updated" })
		} catch (error) {
			return res.status(500).json({ msg: error.message })
		}
	}
};
