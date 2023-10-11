import { Sections } from '../../types'
import './Navbar.scss'
import { type FC } from 'react'

interface NavbarViewProps {
	isActiveLink: (nameSection: Sections) => string
}

const NavbarView: FC<NavbarViewProps> = ({ isActiveLink }) => {
	return (
		<nav className="navbar position-fixed navbar-expand-lg bg-light shadow">
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
							<a
								className={`nav-link ${isActiveLink('About')}`}
								aria-current="page"
								href="#About"
							>
								Acerca de mi
							</a>
						</li>
						<li className="nav-item">
							<a
								className={`nav-link ${isActiveLink('Projects')}`}
								aria-current="page"
								href="#Projects"
							>
								Proyectos
							</a>
						</li>
						<li className="nav-item">
							<a
								className={`nav-link ${isActiveLink('Experience')}`}
								href="#Experience"
							>
								Experiencia
							</a>
						</li>
						<li className="nav-item">
							<a
								className={`nav-link ${isActiveLink('Skills')}`}
								href="#Skills"
							>
								Habilidades
							</a>
						</li>
						<li className="nav-item">
							<a
								className={`nav-link ${isActiveLink('Contact')}`}
								href="#Contact"
							>
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
