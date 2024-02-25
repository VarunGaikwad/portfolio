import { useState } from "react";
import hamburger from "../assets/hamburger.svg";
import cross from "../assets/cross.svg";

export default function Home() {
  const [menuVisible, setMenuVisible] = useState(false);

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
          {menuVisible ? (
            <img
              src={cross}
              alt="close"
              onClick={() => setMenuVisible(false)}
              className="cursor-pointer"
            />
          ) : (
            <img
              src={hamburger}
              alt="hamburger"
              onClick={() => setMenuVisible(true)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
      <div
        className={`${
          menuVisible ? "fixed inset-0" : "hidden"
        } z-10 py-20 px-10 bg-gray-100 text-white`}
      >
        <span className="text-xl font-bold p-5">Home</span>
        <span className="text-xl font-bold p-5">Work</span>
        <span className="text-xl font-bold p-5">About</span>
      </div>
      {/* NAVBAR END */}
    </section>
  );
}
