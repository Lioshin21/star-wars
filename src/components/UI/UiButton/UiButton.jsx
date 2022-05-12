// Styles
import styles from "./UiButton.module.css";
import '../index.css'
import cn from 'classnames'

import propTypes from "prop-types";

const UiButton = ({ text, onClick, disabled, theme='dark', classes }) => {
  return (
    <button 
        onClick={onClick} 
        disabled={disabled} 
        className={cn(styles.button, styles[theme], classes)}
    >
      {text}
    </button>
  );
};

UiButton.propTypes = {
  text: propTypes.string,
  onClick: propTypes.func,
  disabled: propTypes.bool,
  theme: propTypes.string,
  classes: propTypes.string,

};
export default UiButton;
