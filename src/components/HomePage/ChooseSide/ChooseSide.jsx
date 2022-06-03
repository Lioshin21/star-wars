// Styles
import styles from "./ChooseSide.module.css";
import propTypes from "prop-types";
import cn from "classnames";
// Theme
import {
  useTheme,
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEUTRAL,
} from "@context/ThemeProvider";

// images
import imgDark from "./img/dark-side.jpg";
import imgLight from "./img/light-side.jpg";
import imgFalcon from "./img/falcon.jpg";
import { setLocalStorage } from "../../../utils/localStorage";

const ChooseSideItem = ({ theme, text, img, classes }) => {
  const isTheme = useTheme();

  const changeTheme = (theme) => {
    isTheme.change(theme);
    setLocalStorage("theme", theme);
  };

  return (
    <div
      className={cn(styles.item, classes)}
      onClick={() => changeTheme(theme)}
    >
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt={text} />
    </div>
  );
};

ChooseSideItem.propTypes = {
  theme: propTypes.string,
  text: propTypes.string,
  img: propTypes.string,
  classes: propTypes.string,
};

const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: "Light Side",
      img: imgLight,
      classes: styles.item__light,
    },
    {
      theme: THEME_DARK,
      text: "Dark Side",
      img: imgDark,
      classes: styles.item__dark,
    },
    {
      theme: THEME_NEUTRAL,
      text: "I`m Han Solo",
      img: imgFalcon,
      classes: styles.item__neutral,
    },
  ];

  return (
    <div className={styles.container}>
      {elements.map(({ theme, text, img, classes }, index) => (
        <ChooseSideItem
          key={index}
          theme={theme}
          text={text}
          img={img}
          classes={classes}
        />
      ))}
    </div>
  );
};

export default ChooseSide;
