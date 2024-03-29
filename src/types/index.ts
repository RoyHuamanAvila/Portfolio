import { ReactNode } from 'react'

export interface Project {
	name: string
	image: string
	description: string
	tags: string[]
	link_repo: string
	link_demo: string
	link_figma: string
	status: string
}

export interface EducationItemType {
	name: string
	title: string
	date: string
	animationDelay?: number
}

export interface SkillType {
	name: string
	progress: number
	progressInView?: boolean
}

export interface SkillItemType {
	logo: string
	name: string
}

export interface ContactInfoType {
	name: string
	data: string
	link?: string
	children: ReactNode
}

export interface ContactFormType {
	name: {
		value: string
	}
	email: {
		value: string
	}
	message: {
		value: string
	}
}

export interface ServiceItemType {
	name: string
	description: string
	children: ReactNode
}

export type Sections =
	| 'Projects'
	| 'Experience'
	| 'Skills'
	| 'Contact'
	| 'About'
