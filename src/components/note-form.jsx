import React, { useState } from "react";

export const NoteForm = ({ note, onCancel, onChange, onSubmit }) => {
  const [formError, setFormError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (note.title === "") {
    //   setFormError("The title is required");
    // } else {
    onSubmit(note);
    // }
  };
  const handleChange = (e) => {
    setFormError(null);
    const { name, value } = e.target;
    if (name && name === "title") {
      onChange({
        ...note,
        title: value,
      });
    } else {
      onChange({
        ...note,
        text: value,
      });
    }
  };

  return (
    <form>
      <div className="form-group">
        <label>
          Title:
          {formError && <span class="badge badge-danger">{formError}</span>}
        </label>
        <input
          className="form-control"
          name="title"
          value={note.title}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Note:</label>
        <textarea
          className="form-control"
          name="text"
          value={note.text}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        {note.id && (
          <input
            id="cancel-note"
            type="button"
            className="btn btn-default pull-right"
            value="Cancel"
            onClick={() => onCancel()}
          />
        )}

        <input
          id="save-note"
          type="submit"
          className="btn btn-warning pull-right"
          value="Save"
          onClick={(e) => handleSubmit(e)}
        />
      </div>
    </form>
  );
};
