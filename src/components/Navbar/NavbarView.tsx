import ToggleThemeButton from '../ToggleThemeButton'
import './Navbar.scss'
import { type FC } from 'react'

const NavbarView: FC = () => {
	return (
		<nav className="navbar position-fixed navbar-expand-lg bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img src="/Logo.svg" alt="Logo RoyAndresDev" />
				</a>
				<button
					className="navbar-toggler ms-auto"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i className="bi bi-list"></i>
				</button>
				<div
					className="collapse navbar-collapse justify-content-center"
					id="navbarNav"
				>
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								Proyectos
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Experiencia
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Habilidades
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contacto
							</a>
						</li>
						{/* <li className='nav-item'>
              <ToggleThemeButton />
            </li> */}
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default NavbarView
