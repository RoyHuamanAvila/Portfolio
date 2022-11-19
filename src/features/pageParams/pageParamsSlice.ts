import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface pageParamsState {
    theme: 'light'| 'dark'
}


const initialState: pageParamsState = {
    theme: "light"
}

export const pageParamsSlice = createSlice({
    name: 'pageParams',
    initialState,
    reducers: {
        setMode: (state, action: PayloadAction<'light' | 'dark'>) => {
            state.theme = action.payload
        },
        darkMode: (state) => {
            state.theme = 'dark';
            console.log('dark')
        },
        lightMode: (state) => {
            state.theme = 'light';
        }
    }
})

export const {setMode, darkMode, lightMode} = pageParamsSlice.actions;
export default pageParamsSlice.reducer;
