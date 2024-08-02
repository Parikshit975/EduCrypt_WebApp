import { createSlice } from "@reduxjs/toolkit";

export const masterContentSlice = createSlice({
    name: 'home',
    initialState: {
        allCategory: '',
        allCourse: '',
        allCurrentAffair: '',
    },
    reducers: {
        all_CategoryAction: (state, action) => {
            state.allCategory = action.payload
        },
        all_CourseAction: (state, action) => {
            state.allCourse = action.payload
        },
        all_CurrentAffair: (state, action) => {
            state.allCurrentAffair = action.payload
        }
    }
})

export const { all_CategoryAction, all_CourseAction, all_CurrentAffair} = masterContentSlice.actions
export default masterContentSlice.reducer;