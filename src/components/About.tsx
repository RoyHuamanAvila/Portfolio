import { GitHub, LinkedIn } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { PersonCoding } from './PersonCoding';

const About = () => {
    return (
        <div id="about" className="pb-3 about section">
            <div className="about-container">
                <div className="col-12 col-md-6 m-lg-auto">
                    <p className="blockquote-footer col-12 m-0">MY NAME IS</p>
                    <h1>Roy <span className='neon'>Huaman</span></h1>
                    <p>
                        Let me introduce myself, my name is Roy and I am a Full Stack developer 🎨⚙️ and I use technologies like JavaScript, React.js, CSS, Sass, NodeJS, Express.js, MongoDB, Git and agile development methodologies like SCRUM in my projects.
                        Always open to new challenges to test my skills and participate in projects in which my goal will be to show the best result together with my work team. 💼
                    </p>
                    <div className="d-flex gap-3">
                        <IconButton color='inherit' aria-label='Github' href='https://github.com/RoyHuamanAvila' target={'_blank'}>
                            <GitHub />
                        </IconButton>
                        <IconButton color='inherit' aria-label='LinkedIn' href='https://www.linkedin.com/in/royhuamanavila/' target={'_blank'}>
                            <LinkedIn />
                        </IconButton>
                    </div>
                    <a href='src/files/C.V.RoyHuaman.pdf' download='CV-RoyHuaman' className='mt-2 btn btn-primary text-white'>Download CV</a>
                </div>
                <div className="col-12 col-md-6 pt-lg-0 d-flex">
                    <PersonCoding />
                </div>
            </div>
        </div>
    )
}

export default About;
