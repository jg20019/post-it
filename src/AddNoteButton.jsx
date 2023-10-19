
function AddNoteButton({onAddNote}) {
  return (
    <button
      onClick={onAddNote}
      style={{
        position: "absolute",
        bottom: "20px",
        right: "20px",
        padding: "10px",
      }}> Add Note </button>
  )
}

export default AddNoteButton
