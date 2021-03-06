// Styles
import styles from "./PeopleList.module.css";

import propTypes from "prop-types";

// Routes

import { Link } from "react-router-dom";

const PeopleList = ({ people }) => {
  return (
    <ul className={styles.list__container}>
      {people.map(({ id, name, img }) => {
        return (
          <li className={styles.list__item} key={id}>
            <Link to={`/people/${id}`}>
              <img className={styles.person__photo} src={img} alt={name} />
              <p>{name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

PeopleList.propTypes = {
  people: propTypes.array,
};

export default PeopleList;
