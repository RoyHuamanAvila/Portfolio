import { FC, Suspense, lazy, useEffect, useState } from "react"
import type { Work } from "../../types"
import { Tags } from "../Tags"
import { useInView } from "react-intersection-observer";

const ModalWork = lazy(() => import("../ModalWork/ModalWork"));
const WorkItem = lazy(() => import('../WorkItem/WorkItem'));

const WorksView = () => {
    const initialWorks: Work[] = [
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

    const { ref: worksContainer, inView: containerInView } = useInView();
    const [appear, setAppear] = useState<boolean>(false);

    useEffect(() => {
        if (containerInView) setAppear(true);
    }, [containerInView])

    return (
        <div id="Portfolio" className="row py-5 my-5 section">
            <div>
                <p className="blockquote-footer">MY WORKS</p>
                <h2>Featured Portfolios</h2>
            </div>
            <div ref={worksContainer} className="row mx-auto pt-5 gap-3 px-lg-0 gap-lg-0">
                <Suspense fallback={<p>Loading...</p>}>
                    {
                        appear && initialWorks.map((work, index) => <WorkItem key={work.id} {...work} animationDelay={index / 2} />)
                    }
                </Suspense>
            </div>
        </div>
    )
}

export default WorksView
