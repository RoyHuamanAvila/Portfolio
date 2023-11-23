import './WorkCard.scss'
import { FC } from 'react'
import { Project } from '../../types'

interface ProjectCardViewProps {
	project: Project
}

const ProjectCardView: FC<ProjectCardViewProps> = ({ project }) => {
	const { image, name, description, tags, link_demo, link_repo, status } =
		project
	return (
		<div className="Work-Card">
			<div className="Work-Card__head-bar shadow">
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
			</div>
			<div className="px-3 py-4">
				<div className="Work-card__image">
					<img src={image} alt="Work image" />
				</div>
				<div className="d-flex align-items-center mb-3 gap-2">
					<p className="fs-5 text-primary fw-semibold m-0">{name}</p>
					<div className="Work-card__status">
						<span className={`bg-${status}`}></span>
						<p>{status}</p>
					</div>
				</div>
				<p className="Word-card--description">{description}</p>
				<div className="d-flex gap-2 align-items-center flex-wrap mb-3">
					{tags.map((tag, index) => (
						<span className="tag" key={index}>
							{tag}
						</span>
					))}
				</div>
				<div className="d-flex gap-2 justify-content-end">
					<a href={link_repo} target="_blank">
						<button
							className="Work-card--btn bi bi-github"
							title="Github"
							data-bs-toggle="tooltip"
							data-bs-placement="bottom"
							data-bs-title="Github"
						></button>
					</a>
					<a href={link_demo} target="_blank">
						<button
							className="Work-card--btn bi bi-easel-fill"
							title="Demo"
							data-bs-toggle="tooltip"
							data-bs-placement="bottom"
							data-bs-title="Demo"
						></button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default ProjectCardView
