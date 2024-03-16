import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";
const RequireAuth = ({ children }) => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const location = useLocation();
  console.log(location);
  if (isLoggedIn) {
    return children;
  }
  return (
    <Navigate
      to={"/login"}
      replace
      state={{ previousPath: location.pathname }}
    />
  );
};

export default RequireAuth;
