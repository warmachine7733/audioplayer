import React from "react";
import { Redirect } from "react-router-dom";
const routeTodashboard = ({ location }) => {
  if (location.pathname === "/") {
    if (window.localStorage.getItem("token") !== null) {
      return <Redirect to="/dashboard/feed" />;
    } else {
      return <Redirect to="/title" />;
    }
  }
};

const RouteHanlder = ({ location }) => (
  <div>
    {location.pathname === "/" ? routeTodashboard({ location }) : null}
    <h5>
      No route found in <code>{location.pathname}</code>
    </h5>
    <div>
      go to <a href="/title">signup </a>/<a href="/phone">signin</a> page
    </div>
  </div>
);

export default RouteHanlder;
