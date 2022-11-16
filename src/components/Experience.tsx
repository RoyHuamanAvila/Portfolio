import Tags from "./Tags";

const Experience = () => {
    return (
        <div id="Experience" className="row py-5 mb-5">
            <div className="col-12 col-lg-6">
                <p className="blockquote-footer" style={{ letterSpacing: '5px' }}>CAREER PATH</p>
                <h3>Work Experiences</h3>
                <div className="pt-5">
                    <button className="text-primary border-0 bg-transparent">Make It Real</button>
                </div>
            </div>
            <div className="col-12 col-lg-6">
                <h5>FullStack Developer</h5>
                <p>Colombia</p>
                <p>Jul 2022 - Nov 2022 - Full-time</p>
                {
                    Tags(['React', 'Sass', 'Nodejs', 'MongoDB'])
                }
                <hr />
                <ul className="list-group">
                    <li className="list-group-item border-0">
                        In charge of the User/Channel model and the endpoints to which it is necessary to create,
                        edit it. (Frontend/Backend)
                    </li>
                    <li className="list-group-item border-0">
                        In charge of the total editing section of the Channel. (Frontend/Backend)
                    </li>
                    <li className="list-group-item border-0">
                        Responsible for the administration of the Cloudinary service
                    </li>
                    <li className="list-group-item border-0">
                        Support in the comments section (Backend)
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Experience;
