import { useEffect } from "react";
import PropTypes from "prop-types";

export default function MenuButton({ state, onStateChange, className }) {
  const toggleActiveState = () => onStateChange(!state);

  useEffect(() => {
    onStateChange(state);
  }, [state, onStateChange]);

  return (
    <div className={"menu-btn " + className} onClick={toggleActiveState}>
      <span className={state ? "active" : ""} />
      <span className={state ? "active" : ""} />
      <span className={state ? "active" : ""} />
    </div>
  );
}

MenuButton.propTypes = {
  state: PropTypes.bool.isRequired,
  onStateChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};
