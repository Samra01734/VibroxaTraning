import User from '../models/userModel.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import ApiError from '../utils/ApiError.js';

// @desc Get all users
// @route GET /api/users
// @access Public
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json({ success: true, users });
});

// @desc Create user
// @route POST /api/users
// @access Public
export const createUser = asyncHandler(async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) throw new ApiError(400, 'Name and Email are required');

  const existing = await User.findOne({ email });
  if (existing) throw new ApiError(409, 'User already exists');

  const user = await User.create({ name, email });
  res.status(201).json({ success: true, user });
});

// @desc Get single user
// @route GET /api/users/:id
// @access Public
export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) throw new ApiError(404, 'User not found');
  res.status(200).json({ success: true, user });
});

// @desc Update user
// @route PUT /api/users/:id
// @access Public
export const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) throw new ApiError(404, 'User not found');

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;

  const updated = await user.save();
  res.status(200).json({ success: true, user: updated });
});

// @desc Delete user
// @route DELETE /api/users/:id
// @access Public
export const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) throw new ApiError(404, 'User not found');

  await user.deleteOne();
  res.status(200).json({ success: true, message: 'User deleted successfully' });
});
