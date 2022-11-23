import { Menu } from "@mui/icons-material";
import ToggleThemeButton from "./ToggleThemeButton";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">RoyAndDev</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <Menu />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mx-lg-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#Portfolio">Portfolios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Contact">Contact</a>
                        </li>
                        <li className="nav-item d-none">
                            <a className="nav-link" href="#">. . .</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item disabled" href="#">Models 3D</a></li>
                                <li><a className="dropdown-item disabled" href="#">Games</a></li>
                            </ul>
                        </li>
                        <li className="nav-item d-lg-none">
                            <ToggleThemeButton />
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                </div>
                <div className="d-none d-lg-block">
                    <ToggleThemeButton />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
