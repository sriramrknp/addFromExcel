// routes handling the end points

const express = require('express');
const multer = require('multer');
const userController = require('../controller/userController');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", (req, res) => {
    console.log(__dirname);
    res.sendFile("/Users/sriramreddy/Documents/vs_projects/klimb/index.html");
});

// post request of the uploaded file and sending
//  this to controller to process and add users
router.post('/candidates', upload.single('uploadFile'), userController.addCandidates);

module.exports = router;
