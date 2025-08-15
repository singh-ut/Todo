import { createSlice } from "@reduxjs/toolkit";
// nanoid is used to generate unique IDs for each todo item

const initialState = {
    todo: {},
    isEdit: null
};

export const editSlice = createSlice({
    name: "edit",
    initialState,
    reducers: {
        setEditMode: (state, action) => {
            state.todo = action.payload
            state.isEdit = true
        },
        clearEditMode: (state, action) => {
            state.todo = {}
            state.isEdit = null
        }
    }
})

export const { setEditMode, clearEditMode } = editSlice.actions;
export default editSlice.reducer;