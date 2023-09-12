import { FaSun, FaMoon } from "react-icons//fa";
import ""./style.css";

// eslint-disable-next-line react/prop-types
const Switch = ({ handleTheme, checked }) => {
  return (
    <label className="toggle-wrapper" htmlFor="toggle">
      <div className={`toggle bg-gray-800 ${checked ? "enabled" : "disabled"}`}>
        <div className="icons">
          <FaSun />
          <FaMoon />
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          checked={checked}
          onChange={(e) => handleTheme(e.target.checked)}
        />
      </div>
    </label>
  );
};

export default Switch;
