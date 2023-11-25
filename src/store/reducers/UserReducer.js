import { createSlice } from "@reduxjs/toolkit";

const UserReducer = createSlice({
    name: "UserReducer",
    initialState: {
        auth: false,
        currentSelectedCourse: null,
        currentTheme: null,
        currentTesting: null,
        answers: {}
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
            console.log(action.payload)
            if (action.payload.answer) {
                state.answers[action.payload.answerID].push(action.payload.answer)
            } else {
                state.answers[action.payload.answerID] = []
            }
        },
        removeAnswer(state, action){
            state.answers[action.payload.answerID] = state.answers[action.payload.answerID].filter(item => item !== action.payload.answer)
        }
    }
})

export default UserReducer.reducer
export const { updateAnswers, removeAnswer, updateSelectedCourse, updateCurrentTesting } = UserReducer.actions
