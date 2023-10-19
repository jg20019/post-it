import { useState } from 'react'
import Note from './Note'
import AddNoteButton from './AddNoteButton'

function App() {
  let [notes, setNotes] = useState([])

  function addNote() {
    let newNote = {created: Date.now(), content: '', top: '20px', left: '20px'}
    setNotes(notes.concat(newNote))
  }

  function editNote(created, newContent) {
    let newNotes = notes.map((note) => {
      if (note.created == created) {
        note.content = newContent
        return note
      } else {
        return note
      }
    })
    setNotes(newNotes)
  }

  function deleteNote(created) {
    setNotes(notes.filter(note => note.created !== created))
  }

  const noteBoxes = notes.map(note => {
    return <Note
             key={note.created}
             content={note.content}
             top={note.top}
             left={note.left}
             onDelete={() => deleteNote(note.created)}
             onInput={(e) => editNote(note.created, e.target.value)}
           />
  })

  return (
    <>
      <AddNoteButton
        onAddNote={() => addNote()}
      />
      { noteBoxes }
    </>
  )
}

export default App
