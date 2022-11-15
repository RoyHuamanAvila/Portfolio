import type { FC } from "react"
import type { WorkItemType } from "../types"

const Works = () => {
    return (
        <div className="row mb-4">
            <p className="blockquote-footer" style={{ letterSpacing: '5px' }}>MY WORKS</p>
            <h2>Featured Portfolios</h2>
            <div className="row mx-auto pt-5 gap-3 px-lg-0 gap-lg-0">
                <WorkItem
                    img="/icon-no-image.svg"
                    name="Weather App"
                    tags={['React', 'Sass', 'Typescript', 'OpenWeatherApi']}
                />
                <WorkItem
                    img="/icon-no-image.svg"
                    name="Tu Video"
                    tags={['React', 'Nodejs', 'Express', 'Sass', 'MongoDB']}
                />
                <WorkItem
                    img="/icon-no-image.svg"
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
                <img className="img-fluid" src={img} alt="work-image" />
                <div className="py-2 px-2">
                    <h4>{name}</h4>
                    <div className="d-flex gap-2">
                        {
                            tags.map(tag =>
                                <p className="border rounded px-1">{tag}</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works
