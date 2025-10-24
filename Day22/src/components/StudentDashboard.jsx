import React, { useState } from "react";
import "../StudentDashboard.css"; // yaha CSS import

const StudentDashboard = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [filter, setFilter] = useState("All");

  const addStudent = () => {
    if (!name || !age || !course) return;
    const newStudent = { id: Date.now(), name, age, course };
    setStudents([...students, newStudent]);
    setName(""); setAge(""); setCourse("");
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const clearAll = () => {
    setStudents([]);
  };

  const filteredStudents =
    filter === "All" ? students : students.filter((s) => s.course === filter);

  return (
    <div className="dashboard-container">
      <h2>Student Management Dashboard</h2>

      {/* Form */}
      <div className="form-container">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      {/* Filter Dropdown */}
      <div className="filter-container">
        <label>Filter by Course: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Node">Node</option>
        </select>
      </div>

      {/* Conditional Rendering */}
      {filteredStudents.length === 0 ? (
        <p>No students yet!</p>
      ) : (
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.course}</td>
                <td>
                  <button
                    className="action-btn delete-btn"
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Clear All */}
      {students.length > 0 && (
        <button className="clear-btn" onClick={clearAll}>
          Clear All
        </button>
      )}
    </div>
  );
};

export default StudentDashboard;
