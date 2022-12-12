import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import {addNotes} from "../../store/notesSlice"

const AddNote = () => {
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const saveNote = (note) => {
        dispatch(addNotes(note))
    }
    return (
        <div className="form">
            <form onSubmit={handleSubmit(saveNote)}>
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Add note title"
                    {...register("title")}
                />
                <textarea
                    name="description"
                    id="description"
                    placeholder="Add note description"
                    {...register("description")}
                >
                </textarea>
                <button
                    type="submit"
                    className="btn"
                >
                    Add Note
                </button>
            </form>
        </div>
    )
}
export default AddNote