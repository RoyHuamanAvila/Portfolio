import { ReactNode, type FC, RefObject } from 'react'
import './Carousel.scss'

interface CarouselViewProps {
	children: ReactNode[]
	carouselListRef: RefObject<HTMLUListElement>
	widthItem: number
	handleRightArrow: () => void
	handleLeftArrow: () => void
	translate: number
}

const CarouselView: FC<CarouselViewProps> = ({
	children,
	carouselListRef,
	widthItem,
	handleRightArrow,
	handleLeftArrow,
	translate,
}) => {
	return (
		<div className="custom-carousel">
			<button
				className="carousel__arrow"
				title="Anterior"
				onClick={handleLeftArrow}
			>
				<i className="bi bi-caret-left-fill"></i>
			</button>
			<div className="carousel__container-list">
				<ul
					className="list-items"
					style={{ transform: `translate(${translate}px)` }}
					ref={carouselListRef}
				>
					{children.map((child, index) => (
						<li key={index} style={{ width: `${widthItem}px` }} className="p-3">
							{child}
						</li>
					))}
				</ul>
			</div>
			<button
				className="carousel__arrow"
				title="Siguiente"
				onClick={handleRightArrow}
			>
				<i className="bi bi-caret-right-fill"></i>
			</button>
		</div>
	)
}

export default CarouselView
