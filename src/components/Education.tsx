import { FC } from "react";
import { EducationItemType, SkillType } from "../types";
import { useInView } from 'react-intersection-observer'

const Education = () => {
    const { ref: ProgressContainer, inView: progressInView } = useInView();
    return (
        <div className="py-5 my-5 " id="Skills">
            <p className="blockquote-footer" style={{ letterSpacing: '5px' }}>LEARNING PATH</p>
            <h3>Education & Skills</h3>
            <div className="row">
                <div className="col-6">
                    <div className="py-4">
                        <EducationItem name="Make It Real" title="Bootcamp - FullStack Developer" date="2022" />
                        <EducationItem name="Institute San Ignacio de Loyola" title="Bachelor's degree - Software Engineering" date="2021 - 2024" />
                        <EducationItem name="Cibertec" title="Diploma's degree - Java" date="2020 - 2021" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="py-4">
                        <p>
                            For 5+ years, I have been continuously learning in the field of front-end and experimenting with
                            new technologies and frameworks, and here you can see a summary of my skills.
                        </p>
                        <div ref={ProgressContainer}>
                            <SkillProgress name="React" progress={80} progressInView={progressInView} />
                            <SkillProgress name="Nodejs" progress={65} progressInView={progressInView} />
                            <SkillProgress name="Javascript" progress={90} progressInView={progressInView} />
                            <SkillProgress name="Typescript" progress={75} progressInView={progressInView} />
                            <SkillProgress name="Bootstrap 5" progress={70} progressInView={progressInView} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SkillProgress: FC<SkillType> = ({ name, progress, progressInView }) => {
    return (
        <div className="pe-lg-5 py-2">
            <p>{name}</p>
            <div className="progress">
                <div className="progress-container" style={{ width: `${progress}%` }}>
                    <div className={`progress-none ${progressInView && 'progress-transition'}`}></div>
                </div>
            </div>
        </div>
    )
}

const EducationItem: FC<EducationItemType> = ({ name, title, date }) => {
    return (
        <div className="py-4">
            <h5>{name}</h5>
            <p>{title}</p>
            <p>{date}</p>
        </div>
    )
}

export default Education;
