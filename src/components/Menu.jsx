import PropTypes from "prop-types";

export default function Menu({ title, menu }) {
  return (
    <div className="mb-4 space-y-2">
      <div className="text-base md:text-lg lg:text-3xl font-semibold">
        {title}
      </div>
      {menu.map(({ name }, idx) => (
        <div key={idx} className="text-sm md:text-base lg:text-xl">
          {name}
        </div>
      ))}
    </div>
  );
}

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
