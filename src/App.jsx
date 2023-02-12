import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
