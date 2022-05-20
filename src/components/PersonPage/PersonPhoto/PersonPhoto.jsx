// Styles
import styles from "./PersonPhoto.module.css";
import propTypes from "prop-types";

// Redux
import { useDispatch } from "react-redux";
import { setPersonToFavorite, removePersonFromFavorite } from "@store/actions";

// icons
import iconFavorite from "./img/favorite.svg";
import iconFavoriteFill from "./img/favorite-fill.svg";

const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto,
          },
        })
      );
      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
        <img
        onClick={dispatchFavoritePeople}
        src={personFavorite ? iconFavoriteFill : iconFavorite}
        className={styles.favorite}
        alt="Favorite"
      />
      </div>
    </>
  );
};

PersonPhoto.propTypes = {
  personId: propTypes.string,
  personPhoto: propTypes.string,
  personName: propTypes.string,
  personFavorite: propTypes.bool,
  setPersonFavorite: propTypes.func,
};
export default PersonPhoto;
