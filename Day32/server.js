const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// ========================================
// MOCK DATA
// ========================================
const users = [
  { id: 1, name: "Ali", role: "admin" },
  { id: 2, name: "Sara", role: "editor" },
  { id: 3, name: "Ahmed", role: "viewer" }
];

// ========================================
// BUILT-IN MIDDLEWARE
// ========================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ========================================
// THIRD-PARTY MIDDLEWARE
// ========================================
app.use(morgan('dev'));
app.use(cors());

// ========================================
// CUSTOM MIDDLEWARE
// ========================================
const customLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
};
app.use(customLogger);

// ========================================
// ROUTES
// ========================================

// GET /users - All users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET /users/:id - User by ID
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json(user);
});

// GET /users/search?role=admin - Filter by role
app.get('/users/search', (req, res) => {
  const { role } = req.query;
  
  if (!role) {
    return res.status(400).json({ error: 'Role parameter required' });
  }
  
  const filteredUsers = users.filter(user => user.role === role);
  res.json(filteredUsers);
});

// ========================================
// 404 MIDDLEWARE
// ========================================
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// ========================================
// ERROR HANDLING MIDDLEWARE (LAST)
// ========================================
app.use((err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] ERROR:`, err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: err.message 
  });
});

// ========================================
// START SERVER
// ========================================
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 User Directory API running on http://localhost:${PORT}`);
  console.log('📋 Test these routes:');
  console.log('  GET /users');
  console.log('  GET /users/2');
  console.log('  GET /users/search?role=admin');
});