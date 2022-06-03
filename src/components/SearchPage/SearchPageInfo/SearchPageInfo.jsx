// Styles
import styles from "./SearchPageInfo.module.css";
import propTypes from "prop-types";

// Routes
import { Link } from "react-router-dom";

const SearchPageInfo = ({ people }) => {
  return (
    <div>
      {people.length ? (
        <ul className={styles.list__container}>
          {people.map(({ id, name, img }) => {
            return (
              <li className={styles.list__item} key={id}>
                <Link to={`/people/${id}`}>
                  <img className={styles.person__photo} src={img} alt={name} />
                  <p className={styles.person__name}>{name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <h2 className={styles.person__comment}>No results</h2>
      )}
    </div>
  );
};

SearchPageInfo.propTypes = {
  people: propTypes.array,
};
export default SearchPageInfo;
