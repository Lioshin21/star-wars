// Styles
import styles from "./UiInput.module.css";
import cn from "classnames";
import "../index.css";

import icon from "./img/cancel.svg";
import propTypes from "prop-types";

const UiInput = ({ value, handleInputChange, placeholder, classes }) => {
  return (
    <div className={cn(styles.wrapper__input, classes)}>
      <input
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
      <img
        src={icon}
        alt="clear"
        onClick={() => value && handleInputChange("")}
        className={cn(styles.clear, !value && styles.clear__disabled)}
      />
    </div>
  );
};

UiInput.propTypes = {
  value: propTypes.string,
  handleInputChange: propTypes.func,
  placeholder: propTypes.string,
  classes: propTypes.string,
};
export default UiInput;
