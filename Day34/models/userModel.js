import mongoose from 'mongoose';

// Define schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
}, {
  timestamps: true, // adds createdAt and updatedAt automatically
});

// Create model
const User = mongoose.model('User', userSchema);

export default User;
