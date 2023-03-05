import { FC, Suspense, lazy } from "react";
import { EducationItemType, SkillItemType, SkillType } from "../types";
import { useInView } from 'react-intersection-observer'
import { Tabs } from "./Tabs";

const SkillsSet = lazy(() => import('./SkillsSet/SkillsSet'))

const Education = () => {
    const { ref: ProgressContainer, inView: progressInView } = useInView();
    return (
        <div className="py-5 my-5 " id="Skills">
            <p className="blockquote-footer" style={{ letterSpacing: '5px' }}>LEARNING PATH</p>
            <h3>Education & Skills</h3>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="py-4 temp-line">
                        <EducationItem name="Make It Real" title="Bootcamp - FullStack Developer" date="2022" />
                        <EducationItem name="Institute San Ignacio de Loyola" title="Bachelor's degree - Software Engineering" date="2021 - 2024" />
                        <EducationItem name="Cibertec" title="Diploma's degree - Java" date="2020 - 2021" />
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="py-4">
                        <p>
                            For 2+ years, I have been continuously learning in the field of frontend/backend and experimenting with
                            new technologies and frameworks, and here you can see a summary of my skills.
                        </p>
                        <Tabs />
                    </div>
                </div>
            </div>
        </div>
    )
}

const EducationItem: FC<EducationItemType> = ({ name, title, date }) => {
    return (
        <div className="py-4 d-flex gap-2">
            <div className="pt-1">
                <div className="point rounded-circle"></div>
            </div>
            <div>
                <h5>{name}</h5>
                <p>{title}</p>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default Education;
