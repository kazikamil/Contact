const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'files/'); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); 
    console.log("hi2")// Naming convention for uploaded files
  },
});

module.exports = multer({ storage: storage });
