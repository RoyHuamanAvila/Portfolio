import About from "./components/About";
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
    </div>
  )
}

export default App
