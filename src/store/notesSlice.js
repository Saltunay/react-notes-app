import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        notes: []
    },
    reducers: {
        addNotes: (state, action) => {
            state.notes = [...state.notes, action.payload]
        }
    }
})

export const { addNotes } = notesSlice.actions
export default notesSlice.reducer