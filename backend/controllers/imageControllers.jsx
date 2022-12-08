const fs =require("fs")
const cloudinary = require("cloudinary");
const removeTemp = (path) => {
  fs.unlinkSync(path);
};
exports.imgController = {
	uploadImg : async (req, res) => {
		try {
		  const config = {
			cloud_name: process.env.CLOUD_NAME,
			api_key: process.env.CLOUD_API_KEY,
			api_secret: process.env.CLOUD_API_SECRET,
			secure: true,
		  };
		  const {files} = req.files;
		  const images = [files].flat();
		  if (!images) {
			res.status(400).json({ msg: "zurag oruulna uuu" });
		  }
		  const uploadImages = images.map(async (el) => {
			try {
			  return cloudinary.v2.uploader.upload(el.tempFilePath, { ...config, folder: "Mepo-af" }).then((result) => {
				removeTemp(el.tempFilePath);
				return { url: result.url, public_id: result.public_id };
			  });
			} catch (error) {
			  console.log(error);
			}
		  });
		  Promise.all(uploadImages).then((result) => {
			res.status(200).json({ result });
		  });
		} catch (error) {
		  return res.status(500).json({ msg: error.message });
		}
	  },
	  
	  deleteImg : async (req, res) => {
		try {
		  const config = {
			cloud_name: process.env.CLOUD_NAME,
			api_key: process.env.CLOUD_API_KEY,
			api_secret: process.env.CLOUD_API_SECRET,
			secure: true,
		  };
		  const { public_id } = req.body;
		  await cloudinary.v2.api.delete_resources(public_id, config);
		  res.status(200).json({ msg: "zurag ustla" });
		} catch (error) {
		  return res.status(500).json({ msg: error.message });
		}
	  }
}
