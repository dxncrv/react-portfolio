import "./index.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Hero />
      <Sidebar />
      <Projects />
      <Gallery />
      <Resume />
      <About />
      <Contact />
    </>
  );
}

export default App;
