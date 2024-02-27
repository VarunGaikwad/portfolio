import { useRef } from "react";
import Home from "./sections/Home";
import Work from "./sections/Work";
import About from "./sections/About";
About;
export default function App() {
  const homeRef = useRef(null),
    aboutRef = useRef(null),
    workRef = useRef(null),
    scrollToSection = (name) => {
      const sectionRef =
        name === "Home" ? homeRef : name === "About" ? aboutRef : workRef;

      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    };
  return (
    <div>
      <section ref={homeRef}>
        <Home scrollToSection={scrollToSection} />
      </section>
      <section ref={workRef}>
        <Work />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
    </div>
  );
}
