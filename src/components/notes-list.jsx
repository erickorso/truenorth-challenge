import React from 'react'

export const NotesList = ({ notes, selected, onSelect }) => {
  const getSelectedId = (selected) => (selected ? selected.id : null);
  return (
    <div className="list-group">
      {notes &&
        notes.map((note) => (
          <div
            className={`list-group-item ${
              getSelectedId(selected) === note.id ? "active" : ""
            }`}
            key={note.id}
            onClick={() => onSelect(note)}
          >
            {note.title}
          </div>
        ))}
    </div>
  );
};
