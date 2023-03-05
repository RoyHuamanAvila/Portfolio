import { FC, Suspense, lazy, useEffect, useState } from "react";
import { EducationItemType, SkillItemType, SkillType } from "../types";
import { useInView } from 'react-intersection-observer'
import { Tabs } from "./Tabs";
import { EducationItem } from "./EducationItem";

const SkillsSet = lazy(() => import('./SkillsSet/SkillsSet'))

const Education = () => {
    const { ref: educationContainer, inView: educationInView } = useInView();
    const [appear, setAppear] = useState<boolean>(false);

    useEffect(() => {
        if (educationInView) setAppear(true)
    }, [educationInView])

    return (
        <div className="py-5 my-5" id="Skills" ref={educationContainer}>
            <div>
                <p className="blockquote-footer" style={{ letterSpacing: '5px' }}>LEARNING PATH</p>
                <h3>Education & Skills</h3>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="py-4 position-relative">
                        {
                            appear && <>
                                <EducationItem name="Make It Real" title="Bootcamp - FullStack Developer" date="2022" animationDelay={1} />
                                <EducationItem name="Institute San Ignacio de Loyola" title="Bachelor's degree - Software Engineering" date="2021 - 2024" animationDelay={2} />
                                <EducationItem name="Cibertec" title="Diploma's degree - Java" date="2020 - 2021" animationDelay={3} />
                                <div className="temp-line"></div>
                            </>
                        }
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="py-4">
                        <p>
                            For 2+ years, I have been continuously learning in the field of frontend/backend and experimenting with
                            new technologies and frameworks, and here you can see a summary of my skills.
                        </p>
                        {
                            appear && <Tabs />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;
