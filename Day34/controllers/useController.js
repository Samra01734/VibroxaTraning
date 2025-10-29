// Temporary in-memory data
let users = [
  { id: 1, name: 'Samra', email: 'samra@example.com' },
  { id: 2, name: 'Zahid', email: 'zahid@example.com' },
];

// Get all users
export const getUsers = (req, res) => {
  res.json(users);
};

// Get user by ID
export const getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

// Create new user
export const createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

// Update user
export const updateUser = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;

  res.json(user);
};

// Delete user
export const deleteUser = (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.json({ message: 'User deleted successfully' });
};
