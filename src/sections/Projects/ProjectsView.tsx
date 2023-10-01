import { FC } from 'react'
import type { Project } from '../../types'
import { ProjectCard, Carousel } from '../../components'

interface ProjectsViewProps {
	readonly projects: Project[]
	reference: (node?: Element | null) => void
}
const ProjectsView: FC<ProjectsViewProps> = ({ projects, reference }) => {
	return (
		<div className="row py-5 my-5 section" id="Projects" ref={reference}>
			<div className="mb-4">
				<p className="blockquote-footer">MIS PROYECTOS</p>
				<h2>Proyectos recientes</h2>
				<p>
					En esta sección puedes ver algunos de los proyectos que he realizado o
					en los que estoy trabajando actualmente.
				</p>
			</div>
			<div className="d-flex flex-wrap gap-4 justify-content-center">
				<Carousel maxItemsPerScroll={3} minWidth={700}>
					{projects.map((work, index) => (
						<ProjectCard key={index} project={work} />
					))}
				</Carousel>
			</div>
		</div>
	)
}

export default ProjectsView
