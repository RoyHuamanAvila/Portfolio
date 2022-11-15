import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Works from "./components/Works";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <About />
      <Works />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
