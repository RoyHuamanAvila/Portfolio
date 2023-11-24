import React from 'react'
import { SkillItemProps } from '../SkillItem/SkillItem'
import { SkillItem } from '../SkillItem'
export interface SkillsSetProps {
	skills: SkillItemProps[]
}

const SkillsSet: React.FC<SkillsSetProps> = ({ skills }) => {
	return (
		<div className="d-flex flex-wrap justify-content-center gap-4 p-4">
			{skills.map((skill, index) => (
				<SkillItem key={index} {...skill} delay={index / 2} />
			))}
		</div>
	)
}

export default SkillsSet
