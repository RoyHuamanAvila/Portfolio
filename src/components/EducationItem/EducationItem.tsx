import React from 'react';
import './styles/EducationItem.scss';
export interface EducationItemProps {
	name: string;
	title: string;
	date: string;
	animationDelay: number;
}

const EducationItem: React.FC<EducationItemProps> = ({ name, title, date, animationDelay }) => {
	return (
		<div className="py-4 d-flex gap-2">
			<div className="pt-1">
				<div className="point rounded-circle" style={{ animationDelay: `${animationDelay}s` }}></div>
			</div>
			<div className='educationitem' style={{ animationDelay: `${animationDelay + 1}s` }}>
				<h5>{name}</h5>
				<p>{title}</p>
				<p>{date}</p>
			</div>
		</div>
	)
};

export default EducationItem;
