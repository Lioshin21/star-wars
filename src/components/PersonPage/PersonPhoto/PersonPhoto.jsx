// Styles
import styles from "./PersonPhoto.module.css";
import propTypes from "prop-types";

const PersonPhoto = ({ personPhoto }) => {
  return (
    <div className={styles.container}>
      <img className={styles.photo} src={personPhoto} alt="personPhoto" />
    </div>
  );
};

PersonPhoto.propTypes = {
  personPhoto: propTypes.string,
};
export default PersonPhoto;
