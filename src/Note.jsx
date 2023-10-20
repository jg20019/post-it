

function Note(props) {
  let {top, left, content} = props
  let {onDelete, onInput} = props
  let {
    onPointerDown,
    onPointerUp,
    onPointerCancel,
    onPointerMove,
    onTouchStart} = props

  return (
    <>
      <div
        style={{
          background: "darkgrey",
          borderRadius: "5px",
          display: "flex",
          height: "250px",
          justifyContent: "center",
          left: left,
          placeItems: "center",
          position: "absolute",
          top: top,
          width: "250px",
        }}

        onPointerDown={(e) => onPointerDown(e, e.target)}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        onPointerMove={onPointerMove}
        onTouchStart={onTouchStart}
      >


        <button
          onClick={onDelete}
          style={{
            background: "firebrick",
            border: "2px solid darkgrey",
            borderRadius: "50%",
            display: "flex",
            fontSize: "18px",
            fontWeight: "bold",
            height: "30px",
            justifyContent: "center",
            padding: "5px",
            placeItems: "center",
            position: "absolute",
            right: "-9px",
            top: "-9px",
            width: "30px",
          }}
        >
          <span> x </span>
        </button>


        <textarea
          style={{
            borderRadius: "5px",
            boxSizing: "border-box",
            fontFamily: "sans-serif",
            fontSize: "16px",
            height: "90%",
            padding: "8px",
            resize: "none",
            width: "97%",
          }}
          onInput={onInput}
          value={content}
        />
      </div>
    </>
  )
}

export default Note
