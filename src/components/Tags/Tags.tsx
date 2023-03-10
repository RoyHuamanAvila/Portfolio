import React from 'react';
import './styles/Tags.scss';
export interface TagsInterface {
	tags: string[]
}

const Tags: React.FC<TagsInterface> = ({ tags }) => {
	return (
		<div className='d-flex gap-2 flex-wrap'>
			{
				tags.map((tag, index) => (
					<div key={index} className='border rounded py-1 px-2'>{tag}</div>
				))
			}
		</div>
	);
};

export default Tags;
