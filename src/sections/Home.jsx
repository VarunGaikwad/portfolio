import { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import cross from "../assets/cross.svg";
import istockphoto from "../assets/istockphoto-removebg.png";
import MobileMenu from "./MobileMenu";

export default function Home() {
  const menu = [{ name: "Home" }, { name: "Work" }, { name: "About" }],
    [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    document.body.style.overflowY = menuVisible ? "auto" : "hidden";
  };

  return (
    <section>
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <div className="size-5 bg-blue-500 rounded-full mx-4"></div>
          <div className="font-bold text-3xl">Varun Gaikwad</div>
        </div>
        <div className="hidden md:block">
          {menu.map(({ name }, idx) => (
            <span key={idx} className="text-xl font-bold">
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
      <div className="flex-1 px-10 md:flex">
        <img src={istockphoto} />
        <div className="text-3xl space-y-12 select-none py-8 tracking-wide">
          <p className="text-6xl text-blue-500 py-4">Hello!</p>I&apos;m Varun
          Gaikwad, a fullstack web developer.
        </div>
      </div>
      <div className={menuVisible ? "" : "hidden"}>
        <MobileMenu
          toggleMenu={toggleMenu}
          menu={menu}
          menuVisible={menuVisible}
        />
      </div>
    </section>
  );
}
