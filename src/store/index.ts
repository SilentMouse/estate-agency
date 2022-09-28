import { combineReducers, configureStore } from "@reduxjs/toolkit";
import estatesSlice from "./estatesSlice";


export const rootReducer = combineReducers({
    estates: estatesSlice
})


export const store = configureStore({
    reducer: rootReducer
})