import { ReactNode, type FC, RefObject } from 'react'
import './Carousel.scss'

interface CarouselViewProps {
	children: ReactNode[]
	carouselListRef: RefObject<HTMLUListElement>
	widthItem: number
	handleRightArrow: () => void
	handleLeftArrow: () => void
	translate: number
	currentIndex: number
	maxIndex: number
}

const CarouselView: FC<CarouselViewProps> = ({
	children,
	carouselListRef,
	widthItem,
	handleRightArrow,
	handleLeftArrow,
	translate,
	currentIndex,
	maxIndex,
}) => {
	return (
		<div className="custom-carousel">
			<div className="custom-carousel__content">
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
			<div className="carousel__indicators">
				{Array.from(Array(maxIndex).keys()).map((index) => (
					<div
						key={index}
						className={`carousel__indicator ${currentIndex === index ? 'active' : ''
							}`}
					></div>
				))}
			</div>
		</div>
	)
}

export default CarouselView
