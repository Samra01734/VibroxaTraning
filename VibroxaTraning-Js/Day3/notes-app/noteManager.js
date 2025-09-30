// noteManager.js
// This file contains the closure-based logic for managing notes

export function createNoteManager() {
  let notes = []; // private array (closure)

  return {
    add: function (title, content) {
      notes.push({ title, content });
    },
    list: function () {
      return notes;
    },
    delete: function (title) {
      notes = notes.filter((note) => note.title !== title);
    }
  };
}
