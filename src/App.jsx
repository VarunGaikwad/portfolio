// App component
import { useRef } from "react";
import Home from "./sections/Home";
import Work from "./sections/Work";
import About from "./sections/About";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);

  const scrollToSection = (name) => {
    const sectionRef =
      name === "Home"
        ? homeRef.current
        : name === "About"
        ? aboutRef.current
        : workRef.current;

    sectionRef.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div>
      <section className="h-screen bg-gray-100" ref={homeRef}>
        <Home scrollToSection={scrollToSection} />
      </section>
      <section className="h-screen bg-gray-100" ref={workRef}>
        <Work />
      </section>
      <section className="h-screen bg-gray-100" ref={aboutRef}>
        <About />
      </section>
    </div>
  );
}
