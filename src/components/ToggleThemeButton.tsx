import { IconButton } from "@mui/material"
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { setTheme, toggleTheme } from "../features/pageParams/pageParamsSlice";
import { useEffect } from "react";

const ToggleThemeButton = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.pageParams.theme);

    useEffect(() => {
        const themeSaved = localStorage.getItem('theme');
        if (themeSaved) dispatch(setTheme(themeSaved));
    }, [])

    const toggle = () => {
        dispatch(toggleTheme());
    }

    return (
        <IconButton aria-label="Dark-Mode" color="inherit" onClick={toggle}>
            {
                theme === 'light' ? <LightModeOutlined /> : <DarkModeOutlined />
            }
        </IconButton>
    )
}

export default ToggleThemeButton
