// Import express
const express = require('express');

// Create an Express app
const app = express();

// Define a port
const PORT = 3000;

// Create a basic route
app.get('/', (req, res) => {
  res.send('Hello, Express server is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
