// Styles
import styles from "./PersonInfo.module.css";
import propTypes from "prop-types";

const PersonInfo = ({ personInfo }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        {personInfo.map(
          ({ title, data }) =>
            data && (
              <li className={styles.list__item} key={title}>
                <span className={styles.item__title}>{title}</span> : {data}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

PersonInfo.propTypes = {
  personInfo: propTypes.array,
};
export default PersonInfo;
