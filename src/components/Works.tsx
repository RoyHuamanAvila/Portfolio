import { FC, Suspense, lazy, useEffect, useState } from "react"
import type { Work } from "../types"
import { Tags } from "./Tags"
import { useInView } from "react-intersection-observer";

const ModalWork = lazy(() => import("./ModalWork/ModalWork"));
const WorkItem = lazy(() => import('./WorkItem/WorkItem'));

const Works = () => {
    const initialWorks: Work[] = [
        {
            id: "AB",
            img: "/dibujo.png",
            name: "TuVideo V2",
            description: "Version actualizada de TuVideo (Clon de Youtube) hecho con Bootstrap 5, Nestjs, React TS con un sistema de autenticacion manejado por Auth0.",
            tags: ['React', 'Nodejs', 'NestJS', 'Sass', 'Mongo'],
            linkCode: 'https://github.com/RoyHuamanAvila/TuVideo',
            linkDemo: 'https://tuvideo.vercel.app'
        },
        {
            id: "BC",
            img: "https://res.cloudinary.com/dcvwghrfp/image/upload/v1668635675/WorksPortfolio/WeatherApp/WeatherAppMain.jpg",
            name: "Weather App",
            tags: ['React', 'Sass', 'Typescript', 'OpenWeather'],
            description: "Web application with weather forecast information",
            linkCode: 'https://github.com/RoyHuamanAvila/Weather-app',
            linkDemo: ''
        },
        {
            id: "CD",
            img: "https://res.cloudinary.com/dcvwghrfp/image/upload/v1668636039/WorksPortfolio/TemplatePage/TemplatePageMain.jpg",
            name: "Template Page",
            description: "Template page made in Bootstrap 5",
            tags: ['Typescript', 'Bootstrap 5'],
            linkCode: 'https://github.com/RoyHuamanAvila/Firebox',
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

export default Works
