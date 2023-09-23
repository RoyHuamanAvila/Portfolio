import { FC } from 'react'
import type { Work } from '../../types'
import { WorkCard } from '../WorkCard'
import { Carousel } from '../Carousel'

interface WorkViewProps {
	readonly works: Work[]
}
const WorksView: FC<WorkViewProps> = ({ works }) => {
	return (
		<div className="row py-5 my-5 section" id="Portfolio">
			<div className="mb-4">
				<p className="blockquote-footer">MIS PROYECTOS</p>
				<h2>Proyectos recientes</h2>
				<p>
					Proyectos en los que he pulido mis habilidades como desarrollador
					fullstack
				</p>
			</div>
			<div className="d-flex flex-wrap gap-4 justify-content-center">
				<Carousel maxItemsPerScroll={3} minWidth={700}>
					{works.map((work, index) => (
						<WorkCard key={index} work={work} />
					))}
				</Carousel>
			</div>
		</div>
	)
}

export default WorksView
