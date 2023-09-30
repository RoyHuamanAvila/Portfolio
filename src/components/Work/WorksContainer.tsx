import { useEffect } from 'react'
import { Work } from '../../types'
import Projects from './Projects.json'
import WorksView from './WorksView'
import { useInView } from 'react-intersection-observer'
import { useDispatch } from 'react-redux'
import { setSectionInView } from '../../features/pageParams/pageParamsSlice'

const WorksContainer = () => {
	const works: Work[] = Projects
	const { ref: projectsRef, inView: projectsInView } = useInView({
		threshold: 0.5,
	})
	const dispatch = useDispatch()

	useEffect(() => {
		if (projectsInView) {
			dispatch(setSectionInView('Projects'))
		}
	}, [projectsInView])

	return <WorksView works={works} reference={projectsRef} />
}

export default WorksContainer
