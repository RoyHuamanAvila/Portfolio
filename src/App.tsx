import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from './app/store'
import { lazy, Suspense, useEffect, useState } from 'react'
/* import Services from "./components/Services"; */
import { toggleTheme } from './features/pageParams/pageParamsSlice'
import { Navbar, Works } from './components'

const About = lazy(async () => await import('./components/About/About'))
const Contact = lazy(async () => await import('./components/Contact/ContactContainer'))
const Education = lazy(async () => await import('./components/Education'))
const ExperienceLazy = lazy(async () => await import('./components/Experience/ExperienceContainer'))
const Footer = lazy(async () => await import('./components/Footer'))

const App = () => {
  const theme = useSelector((state: RootState) => state.pageParams.theme)

  return (
    <div className={`page-container ${theme}`}>
      <div className="container mandatory-scroll-snapping">
        <Navbar />
        <About />
        <Works />
        <ExperienceLazy />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
