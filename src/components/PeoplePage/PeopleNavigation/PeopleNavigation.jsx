// Styles
import styles from "./PeopleNavigation.module.css";
import propTypes from "prop-types";

// UI
import UiButton from "@ui/UiButton";

// Route
import { Link } from "react-router-dom";


const PeopleNavigation = ({ prevPage, nextPage, currentPage, getResource }) => {
  const handleChangeNext = () => getResource(nextPage);
  const handleChangePrev = () => getResource(prevPage);
  return (
    <div className={styles.container}>
      <Link to={`/people/?page=${currentPage - 1}`} className={styles.buttons}>
        <UiButton 
            text='Previous'
            onClick={handleChangePrev}
            disabled={!prevPage}
        />
      </Link>
      <Link to={`/people/?page=${currentPage + 1}`} className={styles.buttons}>
        <UiButton 
            text='Next'
            onClick={handleChangeNext}
            disabled={!nextPage}
        />
      </Link>
    </div>
  );
};

PeopleNavigation.propTypes = {
  prevPage: propTypes.string,
  nextPage: propTypes.string,
  currentPage: propTypes.number,
  getResource: propTypes.func,
};
export default PeopleNavigation;
