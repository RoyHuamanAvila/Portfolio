import './Header.scss'
import ToggleThemeButton from "../ToggleThemeButton"

const HeaderView = () => {
  return (
    <header>
      <nav className="d-flex header-navbar px-5 py-2">
        <a href="/" className="navbar--logo text-primary">RoyAndresDev</a>
        <div className="d-flex gap-3">
          <a href="#portfolio">Proyectos</a>
          <a href="#experience">Experiencia</a>
          <a href="#skills">Habilidades</a>
          <a href="#contact">Contacto</a>
        </div>
        <ToggleThemeButton />
      </nav>
    </header>
  )
}

export default HeaderView
