const User = require('./userModel');
const moment = require('moment');
const multer = require('multer');

// Get users
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    const usersList = users.map(user => ({
      id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      dateofbirth: moment(user.dateofbirth).utc().format('YYYY-MM-DD'),
    }));
    res.status(200).json(usersList);
  } catch (error) {
    next(error);
  }
};

// Register new user
const registerUser = async (req, res, next) => {
  const { firstName, lastName, email, dateofbirth, password } = req.body;
  try {
    if (!firstName || !lastName || !email || !dateofbirth || !password) {
      res.status(400);
      throw new Error('All fields are required');
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    const user = await User.create({ first_name: firstName, last_name: lastName, email, dateofbirth, password });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

// Authenticate user
const authUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && user.password === password) {
      res.json({
        _id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        dateofbirth: user.dateofbirth,
        points: user.points,
        rank: user.rank,
        badges: user.badges,
        profilePicture: user.profilePicture,
      });
    } else {
      res.status(401);
      throw new Error('Invalid email or password');
    }
  } catch (error) {
    next(error);
  }
};

// Get user profile
const getUserProfile = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      _id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      dateofbirth: user.dateofbirth,
      points: user.points,
      rank: user.rank,
      badges: user.badges,
      profilePicture: user.profilePicture,
    });
  } catch (error) {
    next(error);
  }
};

// Update user
const updateUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      res.status(400).json({ message: 'User not found' });
      return;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    next(error);
  }
};

// Upload Profile Picture
const uploadProfilePicture = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      res.status(400).json({ message: 'User not found' });
      return;
    }
    user.profilePicture = req.file.path;
    await user.save();
    res.status(200).json({ message: 'Profile picture uploaded successfully', profilePicture: user.profilePicture });
  } catch (error) {
    next(error);
  }
};

// Delete user
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(400).json({ message: 'User not found' });
      return;
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    next(error);
  }
};

// Login user
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && user.password === password) {
      res.json({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        dateofbirth: user.dateofbirth,
        profilePicture: user.profilePicture,
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsers, registerUser, getUserProfile, updateUser, uploadProfilePicture, deleteUser, loginUser, authUser };
