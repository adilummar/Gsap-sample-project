import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktiles from "./components/Cocktiles";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";

gsap.registerPlugin(ScrollTrigger, ScrollTrigger);
function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktiles />
      <About />
      <Art />
      <Menu />
    </main>
  );
}

export default App;
