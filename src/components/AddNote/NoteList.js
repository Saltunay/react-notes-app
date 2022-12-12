import { useState } from "react"
import { useSelector } from "react-redux"
import AddNote from "./AddNote"

const NoteList = () => {
    const[isVisible, setVisible] = useState(false)
    const notes = useSelector((state) => state.notes.notes)
    return (
        <div>
            {isVisible && <AddNote />}
            <button
                className="btn new-note"
                onClick={() => setVisible(!isVisible)}
            >
                New Note
            </button>
            <div className="list">
                {notes.map((note) => {
                    return (
                        <div
                            className="item"
                        >
                            <h5>{note.title}</h5>
                            <div>{ note.description }</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default NoteList