import { FC } from 'react'
import './Experience.scss'

interface ExperienceViewProps {
	reference: (node?: Element | null) => void
}

const ExperienceView: FC<ExperienceViewProps> = ({ reference }) => {
	return (
		<div id="Experience" className="section" ref={reference}>
			<div className='w-100'>
				<p className="blockquote-footer">RUTA DE CARRERA</p>
				<h2 className='text-start'>Experiencia</h2>
				<div className="pt-2 pb-2">
					<button className="text-primary border-0 bg-transparent ps-0 mb-3 fw-bold">
						Make It Real
					</button>
					<iframe
						className="Experience-video"
						src="https://www.youtube.com/embed/-SJfrF_vJ3A?si=LPywtHhZlh0B3yLj"
						title="YouTube video player"
						allowFullScreen
					></iframe>
				</div>
			</div>
			<div>
				<div className="d-flex gap-2">
					{['React', 'Javascript', 'Sass', 'Nodejs', 'MongoDB'].map(
						(tag, index) => (
							<span className="tag" key={index}>
								{tag}
							</span>
						)
					)}
				</div>
				<hr />
				<p className="fw-semibold">TuVideo (Video Platform)</p>
				<p>
					Me encargué de diseñar y programar el modelo de Usuario/Canal,
					permitiendo al usuario crear, leer, actualizar y eliminar su
					información personal y de su canal. También implementé la sección de
					edición total del Canal, donde el usuario puede personalizar el
					aspecto y el contenido de su canal según sus preferencias. Finalmente,
					colaboré en la sección de comentarios, desarrollando la lógica del
					backend para facilitar la interacción entre los usuarios.
				</p>
			</div>
		</div>
	)
}

export default ExperienceView
