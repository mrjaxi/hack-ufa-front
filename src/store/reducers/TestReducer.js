import { createSlice } from "@reduxjs/toolkit";

const TestReducer = createSlice({
    name: "TestReducer",
    initialState: {
        test: 1
    },
    reducers: {
        update(state, action){
            state.test += action.payload
        },
    }
})

export default TestReducer.reducer
export const { update } = TestReducer.actions
