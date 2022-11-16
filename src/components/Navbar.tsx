import { DarkModeOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">RoyAndDev</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mx-lg-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Portfolio">Portfolios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item d-none">
                            <a className="nav-link" href="#">. . .</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Models 3D</a></li>
                                <li><a className="dropdown-item" href="#">Games</a></li>
                            </ul>
                        </li>
                        <li className="nav-item d-lg-none">
                            <DarkModeOutlined fontSize="large" className="nav-link" />
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                </div>
                <div className="d-none d-lg-block">
                    <IconButton aria-label="Dark-Mode">
                        <DarkModeOutlined />
                    </IconButton>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
