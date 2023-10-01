import { FC } from 'react'
import { Project } from '../../types'
import ProjectCardView from './ProjectCardView'

interface ProjectCardContainerProps {
	project: Project
}

const ProjectCardContainer: FC<ProjectCardContainerProps> = ({ project }) => {
	return <ProjectCardView project={project} />
}

export default ProjectCardContainer
