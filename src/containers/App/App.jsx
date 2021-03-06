// Styles
import styles from "./App.module.css";

// Routes
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import routesConfig from "@routes/routesConfig";

// Components
import Header from "@components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header />
          <Routes>
            {routesConfig.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
