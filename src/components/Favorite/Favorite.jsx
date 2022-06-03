// Styles
import styles from "./Favorite.module.css";

// Routers
import { Link } from "react-router-dom";

// Hooks
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//icon
import icon from "./img/bookmark.svg";

const Favorite = () => {
  const [count, setCount] = useState();
  const storeDate = useSelector((state) => state.favoriteReducer);
  
  useEffect(() => {
    const length = Object.keys(storeDate).length
    length.toString().length > 2 ? setCount('...') : setCount(length)
    setCount(length)
  }, [storeDate])
  
  return (
    <div className={styles.container}>
      <Link to="/favorites">
        <span className={styles.counter}>{count}</span>
        <img className={styles.icon} src={icon} alt="favorites" />
      </Link>
    </div>
  );
};

export default Favorite;
