// Routes
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { Routes } from "react-router";
import routesConfig from "@routes/routesConfig";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/people">People</NavLink>
        <Routes>
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
