import "./App.scss";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { routes } from "../utils/Routes";
import PrivateRoute from "../Components/Routes/PrivateRoute/PrivateRoute";
import UnverifiedRoute from "../Components/Routes/UnverifiedRoute/UnverifiedRoute";
import { createContext, useMemo, useState } from "react";
export const LoginContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const value = useMemo(() => ({ loggedIn, setLoggedIn }), [loggedIn]);
  return (
    <LoginContext.Provider value={value}>
      <Router>
        <div className="App">
          <Switch>
            {routes.map(({ type, path, component: Component, name }, index) => {
              if (type === "secured") {
                return (
                  <PrivateRoute
                    exact
                    path={path}
                    Component={Component}
                    name={name}
                    key={index}
                  />
                );
              } else {
                return (
                  <UnverifiedRoute
                    exact
                    path={path}
                    Component={Component}
                    name={name}
                    key={index}
                  />
                );
              }
            })}
          </Switch>
        </div>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
