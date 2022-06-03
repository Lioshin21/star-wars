// Styles
import styles from "./UiLoading.module.css";
import cn from "classnames";
import propTypes from "prop-types";

// Images
import loaderBlack from "./img/loader-black.svg";
import loaderWhite from "./img/loader-white.svg";
import loaderBlue from "./img/loader-blue.svg";

// Hooks
import { useEffect, useState } from "react";

const UiLoading = ({ theme = "white", isShadow = true, classes }) => {
  const [loaderIcon, setLoaderIcon] = useState(null);

  useEffect(() => {
    switch (theme) {
      case "black":
        setLoaderIcon(loaderBlack);
        break;
      case "white":
        setLoaderIcon(loaderWhite);
        break;
      case "blue":
        setLoaderIcon(loaderBlue);
        break;
      default:
        setLoaderIcon(loaderBlack);
        break;
    }
  }, []);

  return (
    <img
      className={cn(styles.loader, isShadow && styles.shadow, classes)}
      src={loaderIcon}
      alt="loader"
    />
  );
};

UiLoading.propTypes = {
  theme: propTypes.string,
  isShadow: propTypes.bool,
  classes: propTypes.string,
};
export default UiLoading;
