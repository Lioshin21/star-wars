// Styles
import styles from "./Header.module.css";

// Routes
import { NavLink } from "react-router-dom";

// Components
import Favorite from "@components/Favorite";

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;
