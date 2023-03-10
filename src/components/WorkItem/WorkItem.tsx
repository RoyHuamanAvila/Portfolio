import React, { Suspense } from 'react';
import './styles/WorkItem.scss';
import { Tags } from '../Tags';
import { ModalWork } from '../ModalWork';
export interface WorkItemProps {
	role: 'Fullstack' | 'Frontend' | 'Backend';
	id: string;
	img: string;
	name: string;
	description?: string;
	tags: string[];
	linkCode: string;
	linkDemo: string;
	animationDelay?: number;
}

const WorkItem: React.FC<WorkItemProps> = (work) => {
	const { id, img, name, tags, animationDelay } = work;

	return (
		<>
			<div className="col-12 col-lg-4 workitem" style={{ animationDelay: `${animationDelay}s` }}>
				<div className="border rounded">
					<div className="work-container-img rounded-top bg-white" data-bs-toggle="modal" data-bs-target={`#${id}modal`}>
						<img className="work-image" src={img} alt="work-image" />
						<button className="border-0 work-container-interactive">
							<div className="px-2 py-1 rounded bg-primary">View more</div>
						</button>
					</div>
					<div className="py-3 px-3">
						<h4>{name}</h4>
						<Tags tags={tags} />
					</div>
				</div>
			</div>
			<Suspense fallback={<p>Loading...</p>}>
				<ModalWork {...work} />
			</Suspense>
		</>
	);
};

export default WorkItem;
