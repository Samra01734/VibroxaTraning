import express from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/userController.js';

const router = express.Router();

// CRUD routes
router.get('/', getUsers);            // GET all users
router.get('/:id', getUserById);      // GET single user
router.post('/', createUser);         // POST (create)
router.put('/:id', updateUser);       // PUT (update)
router.delete('/:id', deleteUser);    // DELETE

export default router;
