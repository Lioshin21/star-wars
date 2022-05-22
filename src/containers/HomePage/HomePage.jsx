//Styles
import styles from "./HomePage.module.css";

//Components
import ChooseSide from "../../components/HomePage/ChooseSide/ChooseSide";

const HomePage = () => {
  return (
    <>
      <h1 className='header__text'>Home Page</h1>
      <ChooseSide />
    </>
  );
};

export default HomePage;
