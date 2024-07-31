import { createSlice } from "@reduxjs/toolkit";

export const masterContentSlice = createSlice({
    name: 'home',
    initialState: {
        allCategory: '',
        allCourse: '',
    },
    reducers: {
        all_CategoryAction: (state, action) => {
            state.allCategory = action.payload
        },
        all_CourseAction: (state, action) => {
            state.allCourse = action.payload
        }
    }
})

export const { all_CategoryAction, all_CourseAction} = masterContentSlice.actions
export default masterContentSlice.reducer;