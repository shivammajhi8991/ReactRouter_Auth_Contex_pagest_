import React from "react";
import { useAuth } from "../context/AuthContextProvider";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const { setIsLoggedIn } = useAuth();

  const location = useLocation();
  const previousPath = location.state?.previousPath || "/";
  const navigate = useNavigate();
  function logIn() {
    setIsLoggedIn(true);
    navigate(previousPath, { replace: true });
  }

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={logIn}>Login</button>
    </div>
  );
};

export default Login;
