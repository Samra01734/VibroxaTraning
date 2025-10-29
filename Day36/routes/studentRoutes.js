import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();
const filePath = path.resolve("./data/students.json");

// Helper functions
function readData() {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// GET all students
router.get("/", (req, res) => {
  const students = readData();
  res.json(students);
});

// GET student by ID
router.get("/:id", (req, res) => {
  const students = readData();
  const student = students.find(s => s.id === parseInt(req.params.id));

  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json(student);
});

// POST create student
router.post("/", (req, res) => {
  const { name, age, course } = req.body;

  if (!name || !age || !course) {
    return res.status(400).json({ message: "All fields (name, age, course) are required" });
  }

  const students = readData();
  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name,
    age,
    course,
  };

  students.push(newStudent);
  writeData(students);

  res.status(201).json({ message: "Student added successfully", student: newStudent });
});

// PUT update student
router.put("/:id", (req, res) => {
  const students = readData();
  const studentIndex = students.findIndex(s => s.id === parseInt(req.params.id));

  if (studentIndex === -1) return res.status(404).json({ message: "Student not found" });

  const { name, age, course } = req.body;
  if (!name || !age || !course) {
    return res.status(400).json({ message: "All fields (name, age, course) are required" });
  }

  students[studentIndex] = { id: parseInt(req.params.id), name, age, course };
  writeData(students);

  res.json({ message: "Student updated successfully", student: students[studentIndex] });
});

// DELETE student
router.delete("/:id", (req, res) => {
  const students = readData();
  const filtered = students.filter(s => s.id !== parseInt(req.params.id));

  if (filtered.length === students.length)
    return res.status(404).json({ message: "Student not found" });

  writeData(filtered);
  res.json({ message: "Student deleted successfully" });
});

export default router;
