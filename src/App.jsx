import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktiles from "./components/Cocktiles";

gsap.registerPlugin(ScrollTrigger, ScrollTrigger);
function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktiles />
    </main>
  );
}

export default App;
