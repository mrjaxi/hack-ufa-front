import {combineReducers, configureStore} from "@reduxjs/toolkit";
import TestReducer from "./reducers/TestReducer";
import UserReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({
    TestReducer: TestReducer,
    UserReducer: UserReducer
})

export const store = configureStore({
    reducer: rootReducer,
})
