import { GitHub, LinkedIn } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import './About.scss'

const About = () => {
    return (
        <div id="about" className="pb-3 about section">
            <div className="about-container pt-2">
                <div className="col-12 col-md-6 pt-lg-0 d-flex m-auto">
                    <img src="/Avatar.jpg" className='avatar shadow' alt="Avatar" />
                </div>
                <div className="col-12 col-md-6 m-lg-auto">
                    <p className="blockquote-footer col-12 m-0">MI NOMBRE ES</p>
                    <h1>Roy <span className='neon'>Huaman</span></h1>
                    <p>
                        Soy un desarrollador fullstack que crea soluciones web innovadoras y atractivas con el stack Mongo, Express, React y NestJS, también suelo usar Figma. En esta presentación, les mostraré algunos de mis proyectos y habilidades como desarrollador web. Espero que les guste y que les interese mi trabajo.
                    </p>
                    <div className="d-flex gap-3">
                        <IconButton color='inherit' aria-label='Github' href='https://github.com/RoyHuamanAvila' target={'_blank'}>
                            <GitHub />
                        </IconButton>
                        <IconButton color='inherit' aria-label='LinkedIn' href='https://www.linkedin.com/in/royhuamanavila/' target={'_blank'}>
                            <LinkedIn />
                        </IconButton>
                    </div>
                    <a href='https://royandresdev-portfolio.s3.sa-east-1.amazonaws.com/C.V.+ROY+HUAMAN+AVILA.pdf' download='CV-RoyHuaman' target='_blank' className='mt-2 btn btn-accent text-white'>Ver Curriculum</a>
                </div>
            </div>
        </div>
    )
}

export default About;
