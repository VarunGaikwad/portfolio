import PropTypes from "prop-types";
import { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import cross from "../assets/cross.svg";
import istockphoto from "../assets/istockphoto-removebg.png";
import MobileMenu from "./MobileMenu";

export default function Home({ scrollToSection }) {
  const menu = [{ name: "Home" }, { name: "Work" }, { name: "About" }],
    [menuVisible, setMenuVisible] = useState(false),
    [hovered, setHovered] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    document.body.style.overflowY = menuVisible ? "auto" : "hidden";
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center cursor-pointer">
          <div
            className={`w-8 h-8 bg-blue-500 rounded-full mx-4 transition duration-300 ${
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
        <div className="hidden md:block">
          {menu.map(({ name }, idx) => (
            <span
              onClick={() => scrollToSection(name)}
              key={idx}
              className={`text-xl font-bold px-8 cursor-pointer ${
                name === "Home" ? "text-blue-500" : ""
              }`}
            >
              {name}
            </span>
          ))}
        </div>
        <div className="visible md:hidden">
          <img
            width={35}
            src={menuVisible ? cross : hamburger}
            alt="close"
            onClick={toggleMenu}
            className={`cursor-pointer transition-opacity duration-1000 ${
              menuVisible ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>
      <div className="flex-1 py-10 px-10 md:flex md:items-center md:justify-center md:px-72">
        <img src={istockphoto} />
        <div className="text-3xl space-y-12 select-none py-8 font-medium md:text-7xl md:justify-center">
          <p className="text-6xl text-blue-500 py-4 font-bold md:text-9xl">
            Hello!
          </p>
          <span className="md:text-8xl">I</span>&apos;m Varun Gaikwad, a
          fullstack web developer.
        </div>
      </div>
      <div className={menuVisible ? "" : "hidden"}>
        <MobileMenu
          toggleMenu={toggleMenu}
          menu={menu}
          menuVisible={menuVisible}
        />
      </div>
    </div>
  );
}

Home.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};
