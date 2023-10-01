import './WorkCard.scss'
import { FC } from 'react'
import { Project } from '../../types'

interface ProjectCardViewProps {
	project: Project
}

const ProjectCardView: FC<ProjectCardViewProps> = ({ project }) => {
	const { image, name, description, tags, link_demo, link_repo } = project
	return (
		<div className="Work-Card">
			<div className="Work-Card--head-bar">
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
			</div>
			<div className="px-3 py-4">
				<img className="Work-card--image" src={image} alt="Work image" />
				<p className="fs-5 text-primary fw-semibold">{name}</p>
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
						></button>
					</a>
					<a href={link_demo} target="_blank">
						<button
							className="Work-card--btn bi bi-easel-fill"
							title="Demo"
						></button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default ProjectCardView
