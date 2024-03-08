import PropTypes from "prop-types";

ReUsePage.propTypes = {
  navbarLink: PropTypes.array.isRequired,
  children: PropTypes.element.isRequired,
};
export default function ReUsePage({ navbarLink, children }) {
  const year = new Date().getFullYear();

  return (
    <div className="p-4 min-h-screen max-h-max flex flex-col md:flex-row text-sm md:text-md select-none info-page-text">
      <div className="flex md:flex-col md:p-1 justify-between items-center">
        {navbarLink.map(({ name, href, mobileName }, idx) => (
          <a
            key={idx}
            href={href}
            target={href.indexOf("http") > -1 ? "_blank" : ""}
            rel="noopener noreferrer"
            className="text-vertical"
          >
            <span className="hidden md:inline">{name}</span>
            <span className="md:hidden">{mobileName}</span>
          </a>
        ))}
        <div className="w-1/5 h-px md:w-px md:h-1/5 bg-black"></div>
        <div className="text-vertical">
          <span className="text-copyright">©️</span>/ {year}
        </div>
      </div>
      {children}
    </div>
  );
}
