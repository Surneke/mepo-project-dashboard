const { Schema, model, Types } = require("mongoose");

const AddressSchema = new Schema(
	{
		owner: { type: Types.ObjectId, ref: "User" },
		country: { type: String, required: true, trim: true },
		stateProvince: { type: String, required: true, trim: true },
		zipPostcode: { type: String, required: true, trim: true },
		citySoum: { type: String, required: true, trim: true },
		apartmentSuide: { type: String, required: true, trim: true },
		detail: { type: String, trim: true },
		phoneNum: { type: String, trim: true },
	},
	{ timestamps: true }
);

exports.AddressModel = model("Address", AddressSchema);
