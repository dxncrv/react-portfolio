import "./index.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import About from "./components/About";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Resume />
      <About />
      <Contact />
      <Sidebar />
    </>
  );
}

export default App;
