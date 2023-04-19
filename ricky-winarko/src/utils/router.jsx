//Entry point for the webpack and deals with the routes
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import RoutePaths from "./routes";
import { useAuthContext } from "context/AuthContext";

const WebRoute = () => {
  const { user, isLoading, setUser } = useAuthContext();
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.access.includes(user?.role?.name) || route.access.length === 0)
        return (
          <Route path={route.route} element={route.component} key={route.key} />
        );
    });

  return (
    <Router>
      <Routes>
        {getRoutes(RoutePaths)}
        {/* <Route path="*" element={<Navigate to={getRoute("home")} />} /> */}
      </Routes>
    </Router>
  );
};

export default WebRoute;
