import { GitHub, LinkedIn } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import './About.scss'
import { useEffect, type FC } from 'react'
import { useDispatch } from 'react-redux'
import { useInView } from 'react-intersection-observer'
import { setSectionInView } from '../../features/pageParams/pageParamsSlice'
import { ButtonCV } from '../../components'

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
				<div className="about__info-container slide-in-right">
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
					<div className="mt-3">
						<ButtonCV />
					</div>
				</div>
				<div className="about__photo-container color-change-2x scale-in-center">
					<img src="/Avatar.jpg" className="avatar shadow" alt="Avatar" />
				</div>
			</div>
		</div>
	)
}

export default About
