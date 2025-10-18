//1. DYNAMIC ROUTES EXERCISES
const express = require('express');
const app = express();

app.get('/users/:id', (req, res) => {
  res.json({ message: `User ID: ${req.params.id}` });
});

app.get('/products/:productId/reviews/:reviewId', (req, res) => {
  res.json({ 
    productId: req.params.productId, 
    reviewId: req.params.reviewId 
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));

//2. QUERY STRINGS EXERCISE 
app.get('/search', (req, res) => {
  const { role, active } = req.query;
  res.json({ 
    message: `Filtering by role: ${role}, active: ${active}` 
  });
});
//3. MIDDLEWARE PRACTICE
// Custom Logger Middleware
const customLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
};

// Setup
app.use(express.json());        // Built-in JSON parsing
app.use(customLogger);         // Custom middleware
const morgan = require('morgan');
app.use(morgan('dev'));        // Third-party logging 
//4. ERROR HANDLING EXERCISES 
// 404 Middleware (before error handler)
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error Handling Middleware (LAST)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!', 
    message: err.message 
  });
}); 
//