import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
