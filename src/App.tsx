import About from "./components/About";
import Navbar from "./components/Navbar";
import Works from "./components/Works";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <About />
      <Works />
    </div>
  )
}

export default App
