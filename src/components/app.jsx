import React, { useEffect, useState } from "react";

import { NotesList } from "./notes-list";
import { NoteForm } from "./note-form";
import { groupHex } from "../services/utils";

export const defaultNote = {
  id: null,
  title: "",
  text: "",
};

export const generateId = () => {
  return `${groupHex(8)}-${groupHex(4)}-${groupHex(4)}-${groupHex(
    4
  )}-${groupHex(12)}`;
};
export const App = ({ service }) => {
  const [notes, setNotes] = useState();
  const [note, setNote] = useState(defaultNote);
  const [appError, setAppError] = useState(defaultNote);

  const newNote = () => setNote(defaultNote);

  const onSelect = (note) => setNote(note);

  const getNotes = () => {
    const currentNotes = service.getNotes();
    currentNotes
      .then((data) => {
        setNotes([...data]);
        setAppError(null);
      })
      .catch((err) => {
        setAppError(err);
      });
  };

  const onSubmit = (note) => {
    // const { id } = note;
    // if (id) {
    //   const NewNotesList = notes.map((item) => {
    //     if (item.id === id) {
    //       return {
    //         ...item,
    //         title: note.title,
    //         text: note.text,
    //       };
    //     } else {
    //       return item;
    //     }
    //   });
    //   setNotes(NewNotesList);
    // } else {
    //   const noteAdapter = {
    //     ...note,
    //     id: generateId(),
    //   };
    //   setNotes([...notes, noteAdapter]);
    // }
    // newNote();
    service.saveNote(note);
    getNotes();
  };

  const onCancel = () => setNote(defaultNote);

  useEffect(() => {
    getNotes();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>React notes</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          {appError ? (
            <code>Upp!, there is an error loading the list!</code>
          ) : (
            <NotesList notes={notes} selected={note} onSelect={onSelect} />
          )}
        </div>
        <div className="col-md-8">
          <NoteForm
            note={note}
            onChange={setNote}
            onCancel={onCancel}
            onSubmit={onSubmit}
          />
          {!note.id && (
            <div id="new-note">
              <button className="btn btn-primary" onClick={() => newNote()}>
                New Note
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
