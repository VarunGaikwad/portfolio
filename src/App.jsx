import { useEffect, useRef, useState } from "react";
import Home from "./sections/Home";
import About from "./sections/About";
// import Work from "./sections/Work";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const [mode, setMode] = useState("dark");
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
  const onSwitch = (name) => {
    setMode(name);
    localStorage.whichMode = name;
  };

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    localStorage.whichMode =
      localStorage.whichMode || (darkModeMediaQuery.matches ? "dark" : "");

    setMode(localStorage.whichMode);
  }, []);

  return (
    <div className={mode}>
      <div className="bg-gray-100 dark:bg-black dark:text-white">
        <section className="h-screen" ref={homeRef}>
          <Home scrollToSection={scrollToSection} onSwitch={onSwitch} />
        </section>
        <hr className="border-gray-950 dark:border-gray-100 my-0 mx-4" />
        {/* <section className="h-screen" ref={workRef}>
          <Work />
        </section> */}
        <hr className="border-gray-950 dark:border-gray-100 my-0 mx-4" />
        <section className="h-screen" ref={aboutRef}>
          <About />
        </section>
      </div>
    </div>
  );
}
