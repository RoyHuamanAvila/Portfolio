import { GitHub, LinkedIn } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import './About.scss'
import { useEffect, type FC } from 'react'
import { useDispatch } from 'react-redux'
import { useInView } from 'react-intersection-observer'
import { setSectionInView } from '../../features/pageParams/pageParamsSlice'

const About: FC = () => {
	const { ref: about, inView: aboutInView } = useInView({ threshold: 0.5 })
	const dispatch = useDispatch()

	useEffect(() => {
		if (aboutInView) {
			dispatch(setSectionInView('About'))
		}
	}, [aboutInView])

	return (
		<div id="About" className="pb-3 about section" ref={about}>
			<div className="about-container pt-2">
				<div className="about__info-container">
					<p className="blockquote-footer col-12 m-0">MI NOMBRE ES</p>
					<h1>
						Roy <span className="neon">Huaman</span>
					</h1>
					<p className="about__description">
						Soy un desarrollador fullstack que crea soluciones web innovadoras y
						atractivas con el stack Mongo, Express, React y NestJS, también
						suelo usar Figma. En esta presentación, les mostraré algunos de mis
						proyectos y habilidades como desarrollador web. Espero que les guste
						y que les interese mi trabajo.
					</p>
					<div className="d-flex gap-3">
						<IconButton
							color="inherit"
							aria-label="Github"
							href="https://github.com/RoyHuamanAvila"
							target={'_blank'}
						>
							<GitHub />
						</IconButton>
						<IconButton
							color="inherit"
							aria-label="LinkedIn"
							href="https://www.linkedin.com/in/royhuamanavila/"
							target={'_blank'}
						>
							<LinkedIn />
						</IconButton>
					</div>
					<a
						href="https://royandresdev-portfolio.s3.sa-east-1.amazonaws.com/C.V.+Roy+Huaman.pdf"
						download="CV-RoyHuaman"
						target="_blank"
						className="mt-2 btn btn-accent text-white"
						rel="noreferrer"
					>
						Ver Curriculum
					</a>
				</div>
				<div className="about__photo-container">
					<img src="/Avatar.jpg" className="avatar shadow" alt="Avatar" />
				</div>
			</div>
		</div>
	)
}

export default About
