// Styles
import styles from "./PersonLinkBack.module.css";

import iconBack from './img/back.svg'

// Hooks
import { useNavigate } from "react-router-dom";

const PersonLinkBack = () => {
    const navigate = useNavigate()

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1)
  };
  return (
    <button className={styles.link} onClick={handleGoBack}>
      <img className={styles.link__img} src={iconBack} alt="icon" />
      <span>Go back</span>
    </button>
  );
};

export default PersonLinkBack;
