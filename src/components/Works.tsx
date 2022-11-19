import type { FC } from "react"
import type { WorkItemType } from "../types"
import { Button } from "@mui/material"
import { GitHub, PreviewRounded } from "@mui/icons-material"
import Tags from "./Tags"

const Works = () => {
    const initialWorks: WorkItemType[] = [
        {
            img: "https://res.cloudinary.com/dcvwghrfp/image/upload/v1668635675/WorksPortfolio/WeatherApp/WeatherAppMain.jpg",
            name: "Weather App",
            tags: ['React', 'Sass', 'Typescript', 'OpenWeather'],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur natus, pariatur laudantium eaque molestiae libero? Iusto, adipisci ratione ducimus saepe quas assumenda dolore recusandae magnam, quis totam ea non neque?",
            linkCode: 'https://github.com/RoyHuamanAvila/Weather-app',
            linkDemo: ''
        },
        {
            img: "https://res.cloudinary.com/dcvwghrfp/image/upload/v1668635949/WorksPortfolio/TuVideo/TuVideoMain.jpg",
            name: "Tu Video",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quo deleniti, earum ullam eius nostrum tenetur veritatis, nihil reprehenderit, esse repellendus? Dolorum architecto laboriosam asperiores sunt eum magni modi natus.",
            tags: ['React', 'Nodejs', 'Express', 'Sass', 'Mongo'],
            linkCode: 'https://github.com/RoyHuamanAvila/TuVideo',
            linkDemo: 'https://tuvideo.vercel.app'
        },
        {
            img: "https://res.cloudinary.com/dcvwghrfp/image/upload/v1668636039/WorksPortfolio/TemplatePage/TemplatePageMain.jpg",
            name: "Template Page",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat optio assumenda consectetur consequuntur commodi atque non quas id minus, repellat incidunt voluptatum nulla facilis minima delectus reiciendis maxime illo. Provident.",
            tags: ['Typescript', 'Bootstrap 5'],
            linkCode: 'https://github.com/RoyHuamanAvila/Firebox',
            linkDemo: ''
        }
    ]

    return (
        <div id="Portfolio" className="row py-5 my-5">
            <p className="blockquote-footer">MY WORKS</p>
            <h2>Featured Portfolios</h2>
            <div className="row mx-auto pt-5 gap-3 px-lg-0 gap-lg-0">
                <WorkItem {...initialWorks[0]} />
                <WorkItem {...initialWorks[1]} />
                <WorkItem {...initialWorks[2]} />
            </div>
        </div>
    )
}

const WorkItem: FC<WorkItemType> = (work) => {
    const { img, name, tags, description, linkCode, linkDemo } = work;
    return (
        <div className="col-12 col-lg-4">
            <div className="border rounded">
                <div className="work-container-img rounded-top bg-white" data-bs-toggle="modal" data-bs-target={`#${name.split(' ').join('')}modal`}>
                    <img className="work-image" src={img} alt="work-image" />
                </div>
                <div className="py-3 px-3">
                    <h4>{name}</h4>
                    {
                        Tags(tags)
                    }
                </div>
            </div>

            <div className="modal fade" id={`${name.split(' ').join('')}modal`} data-bs-keyboard="true" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row gap-5 gap-lg-0">
                                <div className="col-12 col-lg-6">
                                    <img className="img-fluid" src={img} alt="" />
                                </div>
                                <div className="col-12 col-lg-6">
                                    <h3>{name}</h3>
                                    <div className="mb-2">
                                        {
                                            Tags(tags)
                                        }
                                    </div>
                                    <p className="mt-3 fw-bold">Description</p>
                                    <p>{description}</p>
                                    <div className="row">
                                        <div className="col-6">
                                            <a className="btn btn-primary text-white w-100" href={linkCode} target='_blank'>
                                                <GitHub /> Code
                                            </a>
                                        </div>
                                        <div className="col-6">
                                            <a className="btn btn-outline-secondary w-100" href={linkDemo} target='_blank'>
                                                <PreviewRounded /> Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works
