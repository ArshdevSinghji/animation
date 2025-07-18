import About from "@/components/About";
import Art from "@/components/Art";
import Cocktail from "@/components/Cocktail";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

//SplitText text animation

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktail />
      <About />
      <Art />
    </main>
  );
};

export default Home;
