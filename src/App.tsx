import { useSelector } from 'react-redux'
import { type RootState } from './app/store'
import { lazy } from 'react'
// import Services from "./components/Services";
//import { toggleTheme } from './features/pageParams/pageParamsSlice'
import { Navbar } from './components'
import { Projects } from './sections'

const About = lazy(async () => await import('./sections/About/About'))
const Contact = lazy(
	async () => await import('./sections/Contact/ContactContainer')
)
const Education = lazy(async () => await import('./sections/Education'))
const ExperienceLazy = lazy(
	async () => await import('./sections/Experience/ExperienceContainer')
)
const Footer = lazy(async () => await import('./sections/Footer'))

const App = () => {
	const theme = useSelector((state: RootState) => state.pageParams.theme)

	return (
		<div className={`page-container ${theme}`}>
			<div className="container mandatory-scroll-snapping">
				<Navbar />
				<About />
				<Projects />
				<ExperienceLazy />
				<Education />
				<Contact />
				<Footer />
			</div>
		</div>
	)
}

export default App
