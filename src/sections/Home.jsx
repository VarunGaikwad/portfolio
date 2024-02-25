import { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import cross from "../assets/cross.svg";

export default function Home() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    // Toggle body overflow
    document.body.style.overflowY = menuVisible ? "auto" : "hidden";
  };

  return (
    <section>
      {/* NAVBAR START */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <div className="size-5 bg-white rounded-full mx-4"></div>
          <div className="font-bold text-3xl">Varun Gaikwad</div>
        </div>
        <div className="hidden md:block">
          <span className="text-xl font-bold">Home</span>
          <span className="text-xl font-bold">Work</span>
          <span className="text-xl font-bold">About</span>
        </div>
        <div className="visible md:hidden">
          <img
            width={35}
            src={hamburger}
            alt="menu"
            onClick={toggleMenu}
            className="cursor-pointer transition-opacity duration-300"
          />
        </div>
      </div>
      <div
        id="second"
        className={`${
          menuVisible
            ? "fixed inset-0 opacity-100 transform translate-x-0 transition-transform duration-300 ease-in-out"
            : "opacity-0 transform translate-x-full transition-transform duration-300 ease-in-out"
        } z-10 bg-white p-4`}
      >
        <div className="flex items-end flex-col">
          <img
            width={35}
            src={cross}
            alt="close"
            onClick={toggleMenu}
            className="cursor-pointer"
          />
          <div className="flex flex-col py-20 px-5">
            <span className="text-xl font-bold pb-8">Home</span>
            <span className="text-xl font-bold pb-8">Work</span>
            <span className="text-xl font-bold pb-8">About</span>
          </div>
        </div>
      </div>
      {/* NAVBAR END */}
      {/* Additional sections or content */}
    </section>
  );
}
