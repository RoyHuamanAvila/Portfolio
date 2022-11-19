import { LinkedIn, GitHub } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Footer = () => {
    return (
        <div className="row text-center mt-4">
            <div className="d-flex gap-3 justify-content-center mb-3">
                <IconButton color="inherit" aria-label='Github' href='https://github.com/RoyHuamanAvila' target={'_blank'}>
                    <GitHub />
                </IconButton>
                <IconButton color="inherit" aria-label='LinkedIn' href='https://www.linkedin.com/in/royhuamanavila/' target={'_blank'}>
                    <LinkedIn />
                </IconButton>
            </div>
            <p className="text-muted">© 2022 - Roy Huaman Avila</p>
        </div>
    )
}

export default Footer;
