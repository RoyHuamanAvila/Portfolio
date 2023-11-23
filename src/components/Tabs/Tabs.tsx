import { SkillItemType } from '../../types'
import './Tabs.scss'
import React, { Suspense, lazy, useState } from 'react'
export interface TabsProps {}

const SkillsSet = lazy(() => import('../SkillsSet/SkillsSet'))

const Tabs: React.FC<TabsProps> = () => {
	const skillsFrontend: SkillItemType[] = [
		{
			logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669774772/SkillsLogos/React.svg',
			name: 'React',
		},
		{
			logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669775053/SkillsLogos/Redux.svg',
			name: 'Redux',
		},
		{
			logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669775680/SkillsLogos/Bootstrap5.svg',
			name: 'Bootstrap 5',
		},
		{
			logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669776267/SkillsLogos/Javascript.svg',
			name: 'Javascript',
		},
		{
			logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669776358/SkillsLogos/TypeScript.svg',
			name: 'Typescript',
		},
		{
			logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669776491/SkillsLogos/Sass.svg',
			name: 'Sass',
		},
		{
			logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669777801/SkillsLogos/Html.svg',
			name: 'Html',
		},
		{
			logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669777920/SkillsLogos/Css.svg',
			name: 'CSS',
		},
	]

	const skillsBackend: SkillItemType[] = [
		{
			logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669777672/SkillsLogos/Mongo.svg',
			name: 'MongoDB',
		},
		{
			logo: 'https://res.cloudinary.com/dnvhasqmw/image/upload/v1698885829/Logos/logo-nodejs.svg',
			name: 'NodeJS',
		},
		{
			logo: 'https://res.cloudinary.com/dnvhasqmw/image/upload/v1698886026/Logos/logo-express.svg',
			name: 'Express',
		},
		{
			logo: 'https://res.cloudinary.com/dnvhasqmw/image/upload/v1698885732/Logos/logo-postgresql.svg',
			name: 'PostgreSQL',
		},
	]

	const skillsTools: SkillItemType[] = [
		{
			logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669779886/SkillsLogos/Heroku.svg',
			name: 'Heroku',
		},
		{
			logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669779996/SkillsLogos/Vercel.svg',
			name: 'Vercel',
		},
		{
			logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669780095/SkillsLogos/Firebase.svg',
			name: 'Firebase',
		},
		{
			logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669780374/SkillsLogos/git-icon_uznbaz.svg',
			name: 'Git',
		},
		{
			logo: 'https://res.cloudinary.com/dcvwghrfp/image/upload/v1669780485/SkillsLogos/Github.svg',
			name: 'Github',
		},
	]

	const [activeTab, setActiveTab] = useState<number>(0)

	const handleTabClick = (index: number) => {
		setActiveTab(index)
	}

	return (
		<div className="tabs-container">
			<ul className="nav nav-tabs">
				<li className="nav-item">
					<button
						className={`nav-link ${activeTab === 0 ? 'active' : ''}`}
						onClick={() => handleTabClick(0)}
					>
						Frontend
					</button>
				</li>
				<li className="nav-item">
					<button
						className={`nav-link ${activeTab === 1 ? 'active' : ''}`}
						onClick={() => handleTabClick(1)}
					>
						Backend
					</button>
				</li>
				<li className="nav-item">
					<button
						className={`nav-link ${activeTab === 2 ? 'active' : ''}`}
						onClick={() => handleTabClick(2)}
					>
						Tools
					</button>
				</li>
			</ul>
			<div className="tab-content">
				<Suspense fallback={<div>Loading...</div>}>
					{activeTab === 0 && <SkillsSet skills={skillsFrontend} />}
					{activeTab === 1 && <SkillsSet skills={skillsBackend} />}
					{activeTab === 2 && <SkillsSet skills={skillsTools} />}
				</Suspense>
			</div>
		</div>
	)
}

export default Tabs
