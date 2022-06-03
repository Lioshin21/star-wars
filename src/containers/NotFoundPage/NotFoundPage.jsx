// Styles
import styles from "./NotFoundPage.module.css";

// Image
import img from "./img/not-found.png";

// Hooks
import { useLocation } from "react-router";

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <>
      <img className={styles.image} src={img} alt="Not found" />
      <p className={styles.text}>
        No match for <u>{location.pathname}</u>
      </p>
    </>
  );
};

export default NotFoundPage;
