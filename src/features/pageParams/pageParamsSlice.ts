import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Sections } from "../../types";

export interface pageParamsState {
    theme: 'light' | 'dark',
    sectionInView: Sections
}


const initialState: pageParamsState = {
    theme: "dark",
    sectionInView: 'Projects'
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
        },
        setSectionInView: (state, action: PayloadAction<Sections>) => {
            state.sectionInView = action.payload;
        }
    }
})

export const { toggleTheme, setTheme, setSectionInView } = pageParamsSlice.actions;
export default pageParamsSlice.reducer;
