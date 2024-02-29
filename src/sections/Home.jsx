import PropTypes from "prop-types";
import { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import cross from "../assets/cross.svg";
import istockphoto from "../assets/istockphoto-removebg.png";
import MobileMenu from "../components/MobileMenu";
import SegmentedButton from "../components/SegmentedButton";

export default function Home({ scrollToSection, onSwitch }) {
  const menu = [{ name: "Home" }, { name: "Work" }, { name: "About" }];
  const [menuVisible, setMenuVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="h-screen">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center cursor-pointer">
          <div
            className={`w-8 h-8 bg-blue-500 rounded-full mx-3 transition duration-300 ${
              hovered ? "rounded-none" : ""
            }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          ></div>
          <div
            className="font-bold text-3xl"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Varun Gaikwad
          </div>
        </div>
        <div className="hidden md:flex md:items-center">
          <SegmentedButton onSwitch={onSwitch} />
          <div className="hidden md:flex">
            {menu.map(({ name }, idx) => (
              <div
                onClick={() => scrollToSection(name)}
                key={idx}
                className={`text-xl font-bold px-8 cursor-pointer ${
                  name === "Home" ? "text-blue-500" : ""
                }`}
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        <div className="block md:hidden">
          <img
            width={35}
            src={menuVisible ? cross : hamburger}
            alt="close"
            onClick={toggleMenu}
            className="cursor-pointer transition-opacity duration-1000 opacity-100"
          />
        </div>
      </div>
      <div className="select-none flex flex-col md:flex-row justify-center items-center py-10 px-6 md:px-10 h-full">
        <div className="md:w-1/2 md:pr-10 order-2 md:order-1">
          <img src={istockphoto} className="w-full rounded-lg" />
        </div>
        <div className="text-center md:text-left md:w-1/2 order-1 md:order-2">
          <div className="text-6xl text-blue-500 py-4 font-bold md:text-9xl">
            Hello!
          </div>
          <span className="text-3xl">
            I&apos;m Varun Gaikwad, a fullstack web developer.
          </span>
        </div>
      </div>
      <div className={menuVisible ? "" : "hidden"}>
        <MobileMenu
          onSwitch={onSwitch}
          toggleMenu={toggleMenu}
          menu={menu}
          menuVisible={menuVisible}
          scrollToSection={scrollToSection}
        />
      </div>
    </div>
  );
}

Home.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
  onSwitch: PropTypes.func.isRequired,
};
