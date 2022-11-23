import { IconButton } from "@mui/material"
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { darkMode, lightMode } from "../features/pageParams/pageParamsSlice";

const ToggleThemeButton = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.pageParams.theme);

    const toggleTheme = () => {
        theme === 'light' ? dispatch(darkMode()) : dispatch(lightMode());
    }

    return (
        <IconButton aria-label="Dark-Mode" color="inherit" onClick={toggleTheme}>
            {
                theme === 'light' ? <DarkModeOutlined /> : <LightModeOutlined />
            }
        </IconButton>
    )
}

export default ToggleThemeButton
