import {combineReducers, configureStore} from "@reduxjs/toolkit";
import TestReducer from "./reducers/TestReducer";

const rootReducer = combineReducers({
    TestReducer: TestReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})
