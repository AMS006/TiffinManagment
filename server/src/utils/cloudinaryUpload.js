const dotenv = require('dotenv')
const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')

dotenv.config()
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
const uploads = (buffer) =>{
    return new Promise((resolve, reject) => {
        let stream = cloudinary.uploader.upload_stream(
          (error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          }
        );
      streamifier.createReadStream(buffer).pipe(stream);
    });
}
module.exports = uploads