import React from "react";
import { Route } from "react-router-dom";
const UnverifiedRoute = (props) => {
  const { path, Component } = props;
  return (
    <Route
      exact
      path={path}
      render={() => {
        return <Component {...props} />;
      }}
    />
  );
};

export default UnverifiedRoute;
