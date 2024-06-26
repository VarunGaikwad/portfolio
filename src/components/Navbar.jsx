import { useState } from "react";
import MenuButton from "./MenuButton";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState(false),
    onStateChange = (flag) => setActive(flag),
    menus = [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Resume",
        link: "/resume",
      },
    ];

  return (
    <nav
      className={`text-white fixed top-0 w-full bg-deep-green bg-opacity-50 transition-color duration-1000 ease-in-out`}
    >
      <div className="flex justify-between items-center p-4">
        <Link
          className={`text-2xl md:text-4xl font-bold tracking-wide`}
          href="/"
        >
          Varun Gaikwad
        </Link>
        <div>
          <div className="md:flex gap-4 text-xl font-bold tracking-wide hidden">
            {menus.map((menu, idx) => (
              <Link to={menu.link} key={idx}>
                {menu.name}
              </Link>
            ))}
          </div>
          <MenuButton
            state={active}
            className="md:hidden"
            onStateChange={onStateChange}
          />
        </div>
      </div>
      <div
        className={`mobile-menu ${
          active ? "active" : ""
        } flex flex-col items-center text-lg font-bold transition-colors duration-300 ease-in-out`}
      >
        {menus.map((menu) => (
          <Link
            className="pb-2"
            to={menu.link}
            key={menu.link}
            onClick={() => onStateChange(false)}
          >
            {menu.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
