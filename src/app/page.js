import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Portfolio /> */}
      <About />
      <Projects />
      <Contact />
    </>
  );
}
