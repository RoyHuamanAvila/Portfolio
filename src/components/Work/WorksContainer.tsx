import { Work } from "../../types"
import WorksView from "./WorksView"

const WorksContainer = () => {
  const works: Work[] = [
    {
      role: "Fullstack",
      id: "AB",
      img: "https://res.cloudinary.com/dnvhasqmw/image/upload/c_scale,w_650/v1678304787/TuVideoV2.webp",
      name: "TuVideo V2",
      description: "Version actualizada de TuVideo (Clon de Youtube) hecho con Bootstrap 5, Nestjs, React TS con un sistema de autenticacion manejado por Auth0.",
      tags: ['React', 'Nodejs', 'NestJS', 'Sass', 'Mongo'],
      linkCode: 'https://github.com/RoyHuamanAvila/TuVideoV2',
      linkDemo: 'https://tuvideo-79bf9.web.app/'
    },
    {
      role: 'Frontend',
      id: "BC",
      img: "https://res.cloudinary.com/dnvhasqmw/image/upload/c_scale,w_650/v1678300925/PokemonWeb_xjn55l.webp",
      name: "Pokemon Web",
      tags: ['React', 'Sass', 'Typescript', "Bootstrap 5"],
      description: "Aplicacion web con tematica de Pokemon con funciones como la Pokedex y una simulacion de sistema de almacenamiento de Pokemones",
      linkCode: 'https://github.com/RoyHuamanAvila/PokemonWeb',
      linkDemo: 'https://pokemonweb-addcc.web.app/'
    },
    {
      role: 'Fullstack',
      id: "CD",
      img: "https://res.cloudinary.com/dnvhasqmw/image/upload/c_scale,w_650/v1678406175/RoyAndresDev-Banner_llxz3h.webp",
      name: "Portfolio",
      description: "Portafolio web que ayudará a mostrar mis proyectos y habilidades",
      tags: ['Typescript', 'Bootstrap 5', 'Nodemailer', 'Express'],
      linkCode: 'https://github.com/RoyHuamanAvila/Portfolio',
      linkDemo: ''
    }
  ]

  return <WorksView works={works} />
}

export default WorksContainer
