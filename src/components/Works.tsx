import { FC, Suspense, lazy } from "react"
import type { Work } from "../types"
import { Tags } from "./Tags"

const ModalWork = lazy(() => import("./ModalWork/ModalWork"));

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

    return (
        <div id="Portfolio" className="row py-5 my-5 section">
            <p className="blockquote-footer">MY WORKS</p>
            <h2>Featured Portfolios</h2>
            <div className="row mx-auto pt-5 gap-3 px-lg-0 gap-lg-0">
                {
                    initialWorks.map(work => <WorkItem key={work.id} {...work} />)
                }
            </div>
        </div>
    )
}

const WorkItem: FC<Work> = (work) => {
    const { id, img, name, tags } = work;
    return (
        <div className="col-12 col-lg-4 work-item">
            <div className="border rounded">
                <div className="work-container-img rounded-top bg-white" data-bs-toggle="modal" data-bs-target={`#${id}modal`}>
                    <img className="work-image" src={img} alt="work-image" />
                    <button className="border-0 work-container-interactive">
                        <div className="px-2 py-1 rounded bg-primary">View more</div>
                    </button>
                </div>
                <div className="py-3 px-3">
                    <h4>{name}</h4>
                    <Tags tags={tags} />
                </div>
            </div>
            <Suspense fallback={<p>Loading...</p>}>
                <ModalWork {...work} />
            </Suspense>
        </div>
    )
}

export default Works
