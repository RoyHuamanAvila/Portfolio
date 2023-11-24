import React from 'react'
import './styles/SkillItem.scss'

export interface SkillItemProps {
	logo: string
	name: string
	delay?: number
}

const SkillItem: React.FC<SkillItemProps> = ({ logo, name, delay }) => {
	return (
		<div className="skillItem" style={{ animationDelay: `${delay}s` }}>
			<div className="skillItem-image">
				<img className="img-fluid" src={logo} alt="logo-skill" />
			</div>
			<p className="text-center pt-2 m-0">{name}</p>
		</div>
	)
}

export default SkillItem
