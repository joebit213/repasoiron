const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name:"dn3s8lyeh",
  api_key: '767159691198498',
  api_secret: 'lYZMg3GOcw5SGpiI0c7pwKrFRGk'
});

var storage = cloudinaryStorage({
  cloudinary,
  folder: 'repaso', // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png', 'gif'],
  filename: (req, file, cb)=> {
    cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
  }
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;