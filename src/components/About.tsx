import { GitHub, LinkedIn } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { PersonCoding } from './PersonCoding';

const About = () => {
    return (
        <div id="about" className="pb-3 about section">
            <div className="about-container pt-2">
                <div className="col-12 col-md-6 m-lg-auto">
                    <p className="blockquote-footer col-12 m-0">MI NOMBRE ES</p>
                    <h1>Roy <span className='neon'>Huaman</span></h1>
                    <p>
                        Me presento mi nombre es Roy y soy desarrollador Full Stack 🎨⚙️ y utilizo tecnologías como JavaScript, React.js, CSS, Sass, NodeJS, Express.js, MongoDB, Git y metodologías de desarrollo ágil como SCRUM en mis proyectos.
                        Siempre abierto a nuevos retos para probar mis habilidades y participar en proyectos en el cual mi objetivo será el mostrar el mejor resultado junto a mi equipo de trabajo. 💼
                        También me gusta el desarrollo de videojuegos para matar el tiempo así que no te sorprendas si encuentras algún proyecto de Unity en mi GitHub 🎮.
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
                <div className="col-12 col-md-6 pt-lg-0 d-flex">
                    <PersonCoding />
                </div>
            </div>
        </div>
    )
}

export default About;
