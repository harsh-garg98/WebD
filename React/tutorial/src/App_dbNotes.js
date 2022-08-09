import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3001/notes')
            .then(response => {
                setNotes(response.data)
            })
    }, [])

    return (
        <div>
            <h1>Notes</h1>
            <div>
                {notes.map(note => (
                    <Note key={note.id} note={note.content} />
                ))}
            </div>

        </div>
    )
}

export default App