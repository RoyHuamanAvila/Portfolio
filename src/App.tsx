import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import { lazy, Suspense, useEffect, useState } from "react";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"))
const Education = lazy(() => import("./components/Education"));
const Experience = lazy(() => import("./components/Experience"));
const Footer = lazy(() => import("./components/Footer"));
const Navbar = lazy(() => import("./components/Navbar"));
/* import Services from "./components/Services"; */
import Works from "./components/Works";
import { toggleTheme } from "./features/pageParams/pageParamsSlice";

const App = () => {
  const theme = useSelector((state: RootState) => state.pageParams.theme)

  return (
    <div className={`page-container ${theme}`}>
      <div className="container">
        <Navbar />
        <About />
        {/*  <Services /> */}
        <Works />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
