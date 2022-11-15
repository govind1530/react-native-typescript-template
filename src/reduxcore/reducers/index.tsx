import {combineReducers} from "@reduxjs/toolkit";
import countReducers from "./countReducers";

const rootReducers = combineReducers({
    counter:countReducers
})

export default rootReducers