import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
/* import Services from "./components/Services"; */
import Works from "./components/Works";

const App = () => {
  const theme = useSelector((state: RootState) => state.pageParams.theme);

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
