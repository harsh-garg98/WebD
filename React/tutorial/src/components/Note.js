import React from 'react';

function Note({note, toggleImportance}) {
  const label = note.important ? 'make not important' : 'make important';
  return (
    <div>
      {note} <button onClick={toggleImportance}>{label}</button>
    </div>
  );
}

export default Note;
