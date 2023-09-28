import './Experience.scss'

const ExperienceView = () => {
	return (
		<div id="Experience" className="row py-5 mb-5 section">
			<div className="col-12 col-lg-6">
				<p className="blockquote-footer">RUTA DE CARRERA</p>
				<h2>Experiencia</h2>
				<div className="pt-2 pb-2">
					<button className="text-primary border-0 bg-transparent ps-0 mb-3 fw-bold">
						Make It Real
					</button>
					<iframe
						className="Experience-video"
						src="https://www.youtube.com/embed/-SJfrF_vJ3A?si=LPywtHhZlh0B3yLj"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</div>
			</div>
			<div className="col-12 col-lg-6">
				<h5>Desarrollador Fullstack</h5>
				<p>Colombia</p>
				<p>Jul 2022 - Nov 2022 - Full-time</p>
				<div className="d-flex gap-2">
					{['React', 'Sass', 'Nodejs', 'MongoDB'].map((tag, index) => (
						<span className="tag" key={index}>
							{tag}
						</span>
					))}
				</div>
				<hr />
				<p className="fw-semibold">TuVideo (Video Platform)</p>
				<p>
					TuVideo 📹 es una app que te permite ver y compartir videos con otras
					personas. Puedes crear una cuenta y subir tus propios videos 📽️, o ver
					los que han subido otros usuarios. También puedes dejar comentarios ✍️
					y decir lo que te gusta o no de los videos. Además, puedes
					personalizar tu canal 🎨 y hacerlo más atractivo para tus seguidores.
				</p>
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
