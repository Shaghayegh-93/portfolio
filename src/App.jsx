import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Work from "./components/work/Work";

function App() {
  return (
    <div className="App bg-[#0a192f]">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
