import {configureStore} from '@reduxjs/toolkit';
import pageParamsReducer from '../features/pageParams/pageParamsSlice';

export const store = configureStore({
    reducer:{
        pageParams: pageParamsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
