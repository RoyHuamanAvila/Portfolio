import { useEffect } from 'react'
import { Project } from '../../types'
import Projects from '../../data/Projects.json'
import ProjectsView from './ProjectsView'
import { useInView } from 'react-intersection-observer'
import { useDispatch } from 'react-redux'
import { setSectionInView } from '../../features/pageParams/pageParamsSlice'

const ProjectsContainer = () => {
	const projects: Project[] = Projects
	const { ref: projectsRef, inView: projectsInView } = useInView({
		threshold: 0.5,
	})
	const dispatch = useDispatch()

	useEffect(() => {
		if (projectsInView) {
			dispatch(setSectionInView('Projects'))
		}
	}, [projectsInView])

	return <ProjectsView projects={projects} reference={projectsRef} />
}

export default ProjectsContainer
