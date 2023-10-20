import { useState } from 'react'
import Note from './Note'
import AddNoteButton from './AddNoteButton'

function App() {
  let [notes, setNotes] = useState([])

  function addNote() {
    let newNote = {
      created: Date.now(),
      content: '',
      pos: {x: 20, y: 20}
    }
    setNotes(notes.concat(newNote))
  }

  function top(note) {
    return `${note.pos.y}px`
  }

  function left(note) {
    return `${note.pos.x}px`
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

  function eventToCoordinates(event) {
    return {x: event.clientX, y: event.clientY}
  }

  function start(created, event, el) {
    if (event.button !== 0) return // left button only
    setNotes(notes.map(note => {
      if (note.created !== created) {
        return note
      }

      let {x, y} = eventToCoordinates(event)
      note.dragging = {dx: note.pos.x - x, dy: note.pos.y - y}
      el.setPointerCapture(event.pointerId)
      return note
    }))
  }

  function end(created) {
    setNotes(notes.map(note => {
      if (note.created !== created) {
        return note
      }
      note.dragging = null
      console.dir('End:', note)
      return note
    }))
  }

  function move(event) {
    setNotes(notes.map(note => {
      if (!note.dragging) {
        return note
      }
      let {x, y} = eventToCoordinates(event)
      note.pos = {x: x + note.dragging.dx, y: y + note.dragging.dy}
      return note
    }))
  }

  const noteBoxes = notes.map(note => {
    return <Note
             key={note.created}
             content={note.content}
             top={top(note)}
             left={left(note)}
             onDelete={() => deleteNote(note.created)}
             onInput={(e) => editNote(note.created, e.target.value)}
             onPointerDown={(event, el) => start(note.created, event, el)}
             onPointerUp={() => end(note.created)}
             onPointerCancel={() => end(note.created)}
             onPointerMove={(event) => move(event)}
             onTouchStart={(e) => e.preventDefault()}
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
