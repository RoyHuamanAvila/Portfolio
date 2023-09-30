import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Tabs } from './Tabs'
import { EducationItem } from './EducationItem'
import { useDispatch } from 'react-redux'
import { setSectionInView } from '../features/pageParams/pageParamsSlice'

const Education = () => {
	const { ref: educationContainer, inView: educationInView } = useInView({
		threshold: 0.5,
	})
	const dispatch = useDispatch()
	const [appear, setAppear] = useState<boolean>(false)

	useEffect(() => {
		if (educationInView) {
			dispatch(setSectionInView('Skills'))
			setAppear(true)
		}
	}, [educationInView])

	return (
		<div id="Skills" className="py-5 my-5 section" ref={educationContainer}>
			<div>
				<p className="blockquote-footer" style={{ letterSpacing: '5px' }}>
					RUTA DE APRENDIZAJE
				</p>
				<h2>Educación y Habilidades</h2>
			</div>
			<div className="row">
				<div className="col-12 col-lg-6">
					<div className="py-4 position-relative">
						{appear && (
							<>
								<EducationItem
									name="Instituto San Ignacio de Loyola"
									title="Ingeniería de Software"
									date="2021 - En pausa"
									animationDelay={1}
								/>
								<EducationItem
									name="Cibertec"
									title="Java"
									date="2020 - 2021"
									animationDelay={2}
								/>
								<div className="temp-line"></div>
							</>
						)}
					</div>
				</div>
				<div className="col-12 col-lg-6">
					<div className="py-4">
						<p>
							En esta sección puedes ver las tecnologías que domino como
							desarrollador fullstack. Estas son las que uso para crear
							aplicaciones web desde el diseño hasta el despliegue:
						</p>
						{appear && <Tabs />}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Education
