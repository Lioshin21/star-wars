// Styles
import styles from "./FavoritesPage.module.css";

//Redux
import { useSelector } from "react-redux";
import { useEffect } from "react";

const FavoritesPage = () => {
  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    console.log(storeData)
    
  }, [storeData])
  return <div></div>;
};

export default FavoritesPage;
