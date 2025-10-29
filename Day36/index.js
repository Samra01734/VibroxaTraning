import express from "express";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/students", studentRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Student Record Management API Running Successfully!");
});

// Server start
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
