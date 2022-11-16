import type { FC } from "react"
import type { WorkItemType } from "../types"
import Tags from "./Tags"

const Works = () => {
    return (
        <div id="Portfolio" className="row py-5 my-5">
            <p className="blockquote-footer" style={{ letterSpacing: '5px' }}>MY WORKS</p>
            <h2>Featured Portfolios</h2>
            <div className="row mx-auto pt-5 gap-3 px-lg-0 gap-lg-0">
                <WorkItem
                    img="https://res.cloudinary.com/dcvwghrfp/image/upload/v1668635675/WorksPortfolio/WeatherApp/WeatherAppMain.jpg"
                    name="Weather App"
                    tags={['React', 'Sass', 'Typescript', 'OpenWeather']}
                />
                <WorkItem
                    img="https://res.cloudinary.com/dcvwghrfp/image/upload/v1668635949/WorksPortfolio/TuVideo/TuVideoMain.jpg"
                    name="Tu Video"
                    tags={['React', 'Nodejs', 'Express', 'Sass', 'Mongo']}
                />
                <WorkItem
                    img="https://res.cloudinary.com/dcvwghrfp/image/upload/v1668636039/WorksPortfolio/TemplatePage/TemplatePageMain.jpg"
                    name="Template Page"
                    tags={['Typescript', 'Bootstrap 5']}
                />
            </div>
        </div>
    )
}

const WorkItem: FC<WorkItemType> = ({ img, name, tags }) => {
    return (
        <div className="col-12 col-lg-4">
            <div className="border rounded">
                <div className="work-container-img rounded-top">
                    <img className="work-image" src={img} alt="work-image" />
                </div>
                <div className="py-3 px-3">
                    <h4>{name}</h4>
                    {
                        Tags(tags)
                    }
                </div>
            </div>
        </div>
    )
}

export default Works
