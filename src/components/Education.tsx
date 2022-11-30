import { FC } from "react";
import { EducationItemType, SkillItemType, SkillType } from "../types";
import { useInView } from 'react-intersection-observer'

const Education = () => {
    const { ref: ProgressContainer, inView: progressInView } = useInView();

    const skillsFrontend: SkillItemType[] = [
        {
            logo: "https://res.cloudinary.com/dcvwghrfp/image/upload/v1669774772/SkillsLogos/React.svg",
            name: "React"
        },
        {
            logo: "https://res.cloudinary.com/dcvwghrfp/image/upload/v1669775053/SkillsLogos/Redux.svg",
            name: "Redux"
        },
        {
            logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669775680/SkillsLogos/Bootstrap5.svg',
            name: 'Bootstrap 5'
        },
        {
            logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669776267/SkillsLogos/Javascript.svg',
            name: 'Javascript'
        },
        {
            logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669776358/SkillsLogos/TypeScript.svg',
            name: 'Typescript'
        },
        {
            logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669776491/SkillsLogos/Sass.svg',
            name: 'Sass'
        },
        {
            logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669777801/SkillsLogos/Html.svg',
            name: 'Html'
        },
        {
            logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669777920/SkillsLogos/Css.svg',
            name: 'CSS'
        }
    ]

    const skillsBackend: SkillItemType[] = [
        {
            logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669777672/SkillsLogos/Mongo.svg',
            name: 'MongoDB'
        },
        {
            logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669779476/SkillsLogos/NodeJS.svg',
            name: 'NodeJS'
        },
        {
            logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669779564/SkillsLogos/Express.svg',
            name: 'Express'
        },
        {
            logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669779642/SkillsLogos/Mongoose.svg',
            name: 'Mongoose'
        }
    ]

    const skillsTools: SkillItemType[] = [
        {
            logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669779886/SkillsLogos/Heroku.svg',
            name: 'Heroku'
        },
        {
            logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669779996/SkillsLogos/Vercel.svg',
            name: 'Vercel'
        },
        {
            logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669780095/SkillsLogos/Firebase.svg',
            name: 'Firebase'
        },
        {
            logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669780374/SkillsLogos/git-icon_uznbaz.svg',
            name: 'Git'
        },
        {
            logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669780485/SkillsLogos/Github.svg',
            name: 'Github'
        }
    ]
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
                        {/*                         <div ref={ProgressContainer}>
                            <SkillProgress name="React" progress={80} progressInView={progressInView} />
                            <SkillProgress name="Nodejs" progress={65} progressInView={progressInView} />
                            <SkillProgress name="Javascript" progress={90} progressInView={progressInView} />
                            <SkillProgress name="Typescript" progress={75} progressInView={progressInView} />
                            <SkillProgress name="Bootstrap 5" progress={70} progressInView={progressInView} />
                        </div> */}
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Frontend</button>
                                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Backend</button>
                                <button className="nav-link" id="nav-tools-tab" data-bs-toggle="tab" data-bs-target="#nav-tools" type="button" role="tab" aria-controls="nav-tools" aria-selected="false">Tools</button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className="d-flex flex-wrap justify-content-center gap-4 p-4">
                                    {
                                        skillsFrontend.map(skill => <SkillItem {...skill} />)
                                    }
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div className="d-flex flex-wrap justify-content-center gap-4 p-4">
                                    {
                                        skillsBackend.map(skill => <SkillItem {...skill} />)
                                    }
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-tools" role="tabpanel" aria-labelledby="nav-tools-tab">
                                <div className="d-flex flex-wrap justify-content-center gap-4 p-4">
                                    {
                                        skillsTools.map(skill => <SkillItem {...skill} />)
                                    }
                                </div>
                            </div>
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

const SkillItem: FC<SkillItemType> = ({ logo, name }) => {
    return (
        <div className="skillItem">
            <div className="skillItem-image">
                <img className="img-fluid" src={logo} alt="logo-skill" />
            </div>
            <p className="text-center pt-2">{name}</p>
        </div>
    )
}

export default Education;
