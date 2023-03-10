import React from 'react';
import './styles/ModalWork.scss';
import { Work } from '../../types';
import { GitHub, PreviewRounded } from '@mui/icons-material';
import { Tags } from '../Tags';

const ModalWork: React.FC<Work> = ({ id, role, img, name, tags, description, linkCode, linkDemo }) => {

	return (
		<div className="modal fade" id={`${id}modal`} data-bs-keyboard="true" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
			<div className="modal-dialog modal-xl">
				<div className="modal-content">
					<div className="modal-header">
						<h3>{name}</h3>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<div className="row gap-5 gap-lg-0">
							<div className="col-12 col-lg-6">
								<img className="img-fluid" src={img} alt="" />
							</div>
							<div className="col-12 col-lg-6">
								<div className="mb-4">
									<h5>Role</h5>
									<p>{role} Developer</p>
									<h5>Description</h5>
									<p>{description}</p>
									<h5>Tags</h5>
									<Tags tags={tags} />
									<h5 className='mt-3'>Author</h5>
									<p>Roy Huaman Avila</p>
								</div>
								<div className="row">
									<div className="col-6">
										<a className="btn btn-primary text-white w-100" href={linkCode} target='_blank'>
											<GitHub /> Code
										</a>
									</div>
									<div className="col-6">
										<a className="btn btn-outline-secondary w-100" href={linkDemo} target='_blank'>
											<PreviewRounded /> Demo
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalWork;
