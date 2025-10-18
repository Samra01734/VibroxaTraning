const express = require("express");
const app = express();

const PORT = 3000;


const users = [
  { id: 1, name: "Ali", role: "admin" },
  { id: 2, name: "Sara", role: "editor" },
  { id: 3, name: "Ahmed", role: "viewer" },
];

// 1️⃣ Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// 2️⃣ Get user by ID
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === parseInt(id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// 3️⃣ Search users by query (role or name)
app.get("/users/search", (req, res) => {
  const { role, name } = req.query;
  let result = users;

  if (role) {
    result = result.filter(u => u.role.toLowerCase() === role.toLowerCase());
  }
  if (name) {
    result = result.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));
  }

  res.json(result);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
