import { useEffect, useRef, useState } from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Work from "./sections/Work";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const [mode, setMode] = useState("dark");
  const [isVisible, setIsVisible] = useState({
    Home: false,
    About: false,
    Work: false,
  });

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
    const observerOptions = {
      threshold: 0.5,
    };

    const observers = {
      Home: new IntersectionObserver(([entry]) => {
        setIsVisible((prevState) => {
          if (prevState.Home) {
            return { ...prevState };
          }
          return {
            ...prevState,
            Home: entry.intersectionRatio >= 0.5,
          };
        });
      }, observerOptions),
      About: new IntersectionObserver(([entry]) => {
        setIsVisible((prevState) => {
          if (prevState.About) {
            return { ...prevState };
          }
          return {
            ...prevState,
            About: entry.intersectionRatio >= 0.5,
          };
        });
      }, observerOptions),
      Work: new IntersectionObserver(([entry]) => {
        setIsVisible((prevState) => {
          if (prevState.Work) {
            return { ...prevState };
          }
          return {
            ...prevState,
            Work: entry.intersectionRatio >= 0.5,
          };
        });
      }, observerOptions),
    };

    observers.Home.observe(homeRef.current);
    observers.About.observe(aboutRef.current);
    observers.Work.observe(workRef.current);

    return () => {
      observers.Home.disconnect();
      observers.About.disconnect();
      observers.Work.disconnect();
    };
  }, []);

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
          <Home
            scrollToSection={scrollToSection}
            onSwitch={onSwitch}
            isVisible={isVisible.Home}
          />
        </section>
        <hr className="border-gray-950 dark:border-gray-100 my-0 mx-4" />
        <section className="h-screen hidden" ref={workRef}>
          <Work isVisible={isVisible.Work} />
        </section>
        <hr className="border-gray-950 dark:border-gray-100 my-0 mx-4" />
        <section className="h-screen" ref={aboutRef}>
          <About isVisible={isVisible.About} />
        </section>
      </div>
    </div>
  );
}
