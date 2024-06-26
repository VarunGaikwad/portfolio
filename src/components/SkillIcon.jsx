import PropTypes from "prop-types";

export default function SkillIcon({ children }) {
  return (
    <div className="flex items-center justify-center w-64 h-28 border border-deep-green rounded-3xl transition-transform hover:scale-110">
      {children}
    </div>
  );
}

SkillIcon.propTypes = {
  children: PropTypes.element,
};
