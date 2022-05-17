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
    <a className={styles.link} href="#" onClick={handleGoBack}>
      <img className={styles.link__img} src={iconBack} alt="icon" />
      <span>Go back</span>
    </a>
  );
};

export default PersonLinkBack;
