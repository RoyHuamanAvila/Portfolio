import { GitHub, LinkedIn } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const About = () => {
    return (
        <div id="about" className="row py-4">
            <p className="blockquote-footer" style={{ letterSpacing: '5px' }}>MY NAME IS</p>
            <div className="col-12 col-lg-6">
                <h1>Roy <span className='text-primary'>Huaman</span></h1>
                <p>
                    Full Stack developer with use of JavaScript using frameworks such as react in the frontend section to develop,
                    and on the backend side using NodeJS and express for the development of API Rest
                </p>
                <div className="d-flex gap-3">
                    <IconButton aria-label='Github' href='https://github.com/RoyHuamanAvila' target={'_blank'}>
                        <GitHub />
                    </IconButton>
                    <IconButton aria-label='LinkedIn' href='https://www.linkedin.com/in/royhuamanavila/' target={'_blank'}>
                        <LinkedIn />
                    </IconButton>
                </div>
            </div>
            <div className="col-12 col-lg-6">
                <img className="img-fluid" src="/icon-no-image.svg" alt="no-image" />
            </div>
        </div>
    )
}

export default About;
