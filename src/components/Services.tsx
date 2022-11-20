import { Star } from "@mui/icons-material"
import { ReactNode } from "react"
import { ServiceItemType } from "../types"

const Services = () => {
    return (
        <div id="services" className="row py-5 my-5">
            <p className="blockquote-footer text-center">
                SERVICES
            </p>
            <h2 className="text-center">Specialized in</h2>
            <div className="row">
                <ServiceItem
                    name="UI/UX Design"
                    description="Turn what you have in mind of a digital product into reality. For any platform you consider."
                >
                    <Star className="m-auto" />
                </ServiceItem>
            </div>
        </div>
    )
}

const ServiceItem = ({ children, name, description }: ServiceItemType) => {
    return (
        <div className="col-4">
            <div className="text-center">
                <div style={{ width: '56px', height: '56px' }} className="bg-secondary p-2 rounded-2 d-flex text-primary m-auto">
                    {children}
                </div>
                <p>{name}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Services
