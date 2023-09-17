import './Experience.scss'

const ExperienceView = () => {

    return (
        <div id="Experience" className="row py-5 mb-5">
            <div className="col-12 col-lg-6">
                <p className="blockquote-footer">RUTA DE CARRERA</p>
                <h2>Experiencia</h2>
                <div className="pt-5 pb-2">
                    <button className="text-primary border-0 bg-transparent ps-0">Make It Real Camp</button>
                </div>
            </div>
            <div className="col-12 col-lg-6">
                <h5>Desarrollador Fullstack</h5>
                <p>Colombia</p>
                <p>Jul 2022 - Nov 2022 - Full-time</p>
                <div className="d-flex gap-2">
                    {
                        ['React', 'Sass', 'Nodejs', 'MongoDB'].map((tag, index) => <span className="tag" key={index}>{tag}</span>)
                    }
                </div>
                <hr />
                <p className="fw-semibold">TuVideo (Video Platform)</p>
                <ul className="list-group">
                    <li className="list-group-item border-0">
                        Encargado del modelo de Usuario/Canal y el CRUD del usuario. (Frontend/Backend)
                    </li>
                    <li className="list-group-item border-0">
                        A cargo de la sección de edición total del Canal. (Frontend/Backend)
                    </li>
                    <li className="list-group-item border-0">
                        Responsable de la administración del servicio Cloudinary.
                    </li>
                    <li className="list-group-item border-0">
                        Soporte en la sección de comentarios (Backend)
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ExperienceView;
