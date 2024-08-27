const express = require('express');
const { registerUser, getUserProfile, updateUser, deleteUser, getUsers, authUser, uploadProfilePicture } = require('./userController');
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/register', registerUser);
router.post('/login', authUser);
router.post('/upload/:id', upload.single('profilePicture'), uploadProfilePicture); // Corrected endpoint
router.get('/profile/:id', getUserProfile);
router.put('/profile/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/', getUsers);

module.exports = router;
