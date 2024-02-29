import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import { useState } from "react";
import PropTypes from "prop-types";

export default function SegmentedButton({ onSwitch }) {
  const [selected, setSelected] = useState(localStorage.whichMode);
  const buttons = [
    { key: "light", src: sun },
    { key: "dark", src: moon },
  ];

  return (
    <div className="cursor-pointer flex flex-row w-max rounded-3xl border-2 border-gray-600 dark:border-gray-200">
      {buttons.map(({ src, key }, idx) => (
        <div
          key={idx}
          className={`p-2 px-4 ${selected === key ? "bg-blue-500" : ""} ${
            idx === 0
              ? "rounded-l-3xl"
              : buttons.length - 1 === idx
              ? "rounded-r-3xl"
              : ""
          }`}
          onClick={() => {
            setSelected(key);
            onSwitch(key);
          }}
        >
          <img width={25} src={src} />
        </div>
      ))}
    </div>
  );
}

SegmentedButton.propTypes = {
  onSwitch: PropTypes.func.isRequired,
};
