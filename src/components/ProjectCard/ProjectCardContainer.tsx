import { FC, useEffect } from 'react'
import { Project } from '../../types'
import ProjectCardView from './ProjectCardView'
import { Tooltip } from 'bootstrap'
interface ProjectCardContainerProps {
	project: Project
}

const ProjectCardContainer: FC<ProjectCardContainerProps> = ({ project }) => {
	useEffect(() => {
		var tooltipTriggerList = [].slice.call(
			document.querySelectorAll('[data-bs-toggle="tooltip"]')
		)
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new Tooltip(tooltipTriggerEl)
		})
	}, [])
	return <ProjectCardView project={project} />
}

export default ProjectCardContainer
