import { createSlice } from "@reduxjs/toolkit";

const UserReducer = createSlice({
    name: "UserReducer",
    initialState: {
        auth: false,
        currentSelectedCourse: null,
    },
    reducers: {
        updateAuth(state, action){
            state.auth = action.payload
        },
        updateSelectedCourse(state, action) {
            state.currentSelectedCourse = action.payload
        }
    }
})

export default UserReducer.reducer
export const { updateAuth, updateSelectedCourse } = UserReducer.actions
