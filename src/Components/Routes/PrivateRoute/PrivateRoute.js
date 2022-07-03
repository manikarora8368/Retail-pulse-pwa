import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { LoginContext } from "../../../App/App";
const PrivateRoute = (privateRouteProps) => {
  const { path, Component } = privateRouteProps;
  const { loggedIn } = useContext(LoginContext);
  return (
    <Route
      exact
      path={path}
      render={() => {
        return loggedIn ? (
          <Component {...privateRouteProps} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        );
      }}
    />
  );
};

export default PrivateRoute;
