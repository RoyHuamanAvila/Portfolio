import React from 'react'
import './ButtonCV.scss'

export type ButtonCVProps = {}

const ButtonCV: React.FC<ButtonCVProps> = ({}) => {
	return (
		<a
			href="https://royandresdev-portfolio.s3.sa-east-1.amazonaws.com/C.V.+Roy+Huaman.pdf"
			download="CV-RoyHuaman"
			target="_blank"
			className="Btn-CV"
			rel="noreferrer"
		>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			Ver Curriculum
		</a>
	)
}

export default ButtonCV
