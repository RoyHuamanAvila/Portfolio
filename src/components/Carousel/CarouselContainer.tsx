import { ReactNode, type FC, useRef, useEffect, useState } from 'react'
import CarouselView from './CarouselView'

interface CarouselContainerProps {
	children: ReactNode[]
	maxItemsPerScroll: number
	minWidth: number
}

const CarouselContainer: FC<CarouselContainerProps> = ({
	children,
	maxItemsPerScroll,
	minWidth,
}) => {
	const carouselListRef = useRef<HTMLUListElement>(null)
	const [translate, setTranslate] = useState(0)
	const [widthItem, setWidthItem] = useState(0)
	const [itemsPerScroll, setItemsPerScroll] = useState(maxItemsPerScroll)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [maxIndex, setMaxIndex] = useState(Math.ceil(children.length / itemsPerScroll));

	useEffect(() => {
		window.addEventListener('resize', updateWidthItem)

		updateWidthItem()

		return () => {
			window.removeEventListener('resize', updateWidthItem)
		}
	}, [])

	const updateWidthItem = () => {
		if (carouselListRef.current) {
			const containerCarousel = carouselListRef.current.parentElement

			if (containerCarousel) {
				if (containerCarousel.offsetWidth > minWidth) {
					setWidthItem(containerCarousel?.offsetWidth / itemsPerScroll)
					setItemsPerScroll(maxItemsPerScroll)
				} else {
					setMaxIndex(children.length)
					setCurrentIndex(0)
					setWidthItem(containerCarousel.offsetWidth)
					setItemsPerScroll(1)
				}
			}
		}
		setTranslate(0)
	}

	const handleRightArrow = () => {
		if (carouselListRef.current) {
			const canMove =
				(Math.abs(translate) + widthItem) * itemsPerScroll <
				carouselListRef.current.offsetWidth
			if (canMove) {
				setTranslate(translate - widthItem)
				setCurrentIndex(currentIndex + 1)
			}
		}
	}

	const handleLeftArrow = () => {
		if (carouselListRef.current) {
			const canMove = translate !== 0
			if (canMove) {
				setTranslate(translate + widthItem)
				setCurrentIndex(currentIndex - 1)
			}
		}
	}

	return (
		<CarouselView
			carouselListRef={carouselListRef}
			widthItem={widthItem}
			handleRightArrow={handleRightArrow}
			handleLeftArrow={handleLeftArrow}
			translate={translate}
			currentIndex={currentIndex}
			maxIndex={maxIndex}
		>
			{children}
		</CarouselView>
	)
}

export default CarouselContainer
