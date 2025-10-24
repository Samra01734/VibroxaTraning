// app.js
import { createNoteManager } from "./noteManager.js";

// Create note manager instance
const notes = createNoteManager();

// DOM Elements
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const addBtn = document.getElementById("addNote");
const notesList = document.getElementById("notesList");

// Add note event
addBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (title && content) {
    notes.add(title, content);
    renderNotes();
    titleInput.value = "";
    contentInput.value = "";
  } else {
    alert("Please enter both title and content!");
  }
});

// Render notes to UI
function renderNotes() {
  notesList.innerHTML = "";

  const allNotes = notes.list();
  allNotes.forEach((note) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${note.title}:</strong> ${note.content}
      <button class="deleteBtn">X</button>
    `;

    // Delete functionality
    li.querySelector(".deleteBtn").addEventListener("click", () => {
      notes.delete(note.title);
      renderNotes();
    });

    notesList.appendChild(li);
  });
}
mn