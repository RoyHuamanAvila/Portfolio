import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface pageParamsState {
    theme: 'light' | 'dark'
}


const initialState: pageParamsState = {
    theme: "dark"
}

export const pageParamsSlice = createSlice({
    name: 'pageParams',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? 'dark' : 'light';
            localStorage.setItem('theme', state.theme);
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
        }
    }
})

export const { toggleTheme, setTheme } = pageParamsSlice.actions;
export default pageParamsSlice.reducer;
