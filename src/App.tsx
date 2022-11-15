import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
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
    </div>
  )
}

export default App
