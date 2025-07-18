import About from "@/components/About";
import Art from "@/components/Art";
import Cocktail from "@/components/Cocktail";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
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
      <Menu />
      <Contact />
    </main>
  );
};

export default Home;
