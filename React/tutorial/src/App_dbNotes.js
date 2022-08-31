import {useState, useEffect} from 'react';
import axios from 'axios';
import Note from './components/Note';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState([]);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001/notes').then(response => {
      setNotes(response.data);
    });
  }, []);

  const addNote = event => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };

    axios.post('http://localhost:3001/notes', noteObject).then(response => {
      setNotes(notes.concat(response.data));
      setNewNote('');
    });
  };

  const handleNoteChange = event => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true);

  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find(n => n.id === id);
    const changedNote = {...note, important: !note.important};

    axios.put(url, changedNote).then(response => {
      setNotes(notes.map(n => (n.id !== id ? n : response.data)));
    });
  };

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>show {showAll ? 'Important' : 'All'}</button>
      <div>
        {notesToShow.map(note => (
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
        ))}
      </div>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
