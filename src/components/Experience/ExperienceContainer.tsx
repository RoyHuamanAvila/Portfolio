import { useDispatch } from 'react-redux'
import ExperienceView from './ExperienceView'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { setSectionInView } from '../../features/pageParams/pageParamsSlice'

const ExperienceContainer = () => {
	const { ref: skills, inView: skillsInView } = useInView({ threshold: 0.5 })
	const dispatch = useDispatch()

	useEffect(() => {
		if (skillsInView) {
			dispatch(setSectionInView('Experience'))
		}
	}, [skillsInView])

	return <ExperienceView reference={skills} />
}

export default ExperienceContainer
