import PropTypes from "prop-types";
import hamburger from "../assets/hamburger.svg";
import cross from "../assets/cross.svg";
import SegmentedButton from "./SegmentedButton";

export default function MobileMenu({
  menuVisible,
  menu,
  toggleMenu,
  scrollToSection,
  onSwitch,
}) {
  return (
    <div
      className={`${
        menuVisible
          ? "fixed inset-0 opacity-100 transform translate-x-0 transition-transform duration-300 ease-in-out"
          : "opacity-0 transform translate-x-full transition-transform duration-300 ease-in-out"
      } z-10 bg-white dark:bg-black p-4`}
    >
      <div className="flex items-end flex-col">
        <div className="flex justify-end">
          <img
            width={35}
            src={menuVisible ? cross : hamburger}
            alt="close"
            onClick={toggleMenu}
            className={`cursor-pointer transition-opacity duration-1000 ${
              menuVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <div className="flex flex-col py-20 px-5">
          {menu.map(({ name }, idx) => (
            <span
              onClick={() => {
                scrollToSection(name);
                toggleMenu();
              }}
              key={idx}
              className={`text-xl font-bold pb-8 ${
                name === "Home" ? "text-blue-500" : ""
              }`}
            >
              {name}
            </span>
          ))}
          <SegmentedButton onSwitch={onSwitch} />
        </div>
      </div>
    </div>
  );
}

MobileMenu.propTypes = {
  menuVisible: PropTypes.bool.isRequired,
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleMenu: PropTypes.func.isRequired,
  scrollToSection: PropTypes.func.isRequired,
  onSwitch: PropTypes.func.isRequired,
};
