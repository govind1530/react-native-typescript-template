// https://codesandbox.io/s/mfetp?file=/src/store.js
// example of saga
import { configureStore } from '@reduxjs/toolkit';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import logger from 'redux-logger'
import RootReducers from '../reducers/index';

const store = configureStore({
reducer:RootReducers,
middleware:(getDefaultMiddleware) =>getDefaultMiddleware().concat([thunk,logger])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =  typeof store.dispatch
export default store;