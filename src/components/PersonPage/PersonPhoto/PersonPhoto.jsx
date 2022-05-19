// Styles
import styles from "./PersonPhoto.module.css";
import propTypes from "prop-types";

//Redux
import { useDispatch } from "react-redux";
import { setPersonToFavorite, removePersonFromFavorite } from "@store/actions";

const PersonPhoto = ({ personPhoto, personName, personId }) => {
  const dispatch = useDispatch();

  const add = () => {
    dispatch(setPersonToFavorite({
        [personId]: {
          name: personName,
          img: personPhoto, 
        }
    }));
  };

  const remove = () => {
    dispatch(removePersonFromFavorite(personId));
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
      </div>
      <button onClick={add}>Add to favorites</button>
      <button onClick={remove}>Delete out favorites</button>
    </>
  );
};

PersonPhoto.propTypes = {
  personId: propTypes.string,
  personPhoto: propTypes.string,
  personName: propTypes.string,
};
export default PersonPhoto;
