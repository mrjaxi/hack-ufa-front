import { createSlice } from "@reduxjs/toolkit";

const UserReducer = createSlice({
    name: "UserReducer",
    initialState: {
        auth: false,
        currentSelectedCourse: null,
        currentTheme: null,
        currentTesting: null,
        answers: []
    },
    reducers: {
        updateAuth(state, action){
            state.auth = action.payload
        },
        updateSelectedCourse(state, action) {
            state.currentSelectedCourse = action.payload
        },
        updateCurrentTesting(state, action) {
            state.currentTesting = action.payload
        },
        updateAnswers(state, action){
            state.answers.push(action.payload)
        },
        updateCurrentQuestion(state, action) {
            state.currentTesting.currentAnswer += 1
        }
    }
})

export default UserReducer.reducer
export const { updateAuth, updateCurrentQuestion, updateAnswers, removeAnswer, updateSelectedCourse, updateCurrentTesting } = UserReducer.actions
