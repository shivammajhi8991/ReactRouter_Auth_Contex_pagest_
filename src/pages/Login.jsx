import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContextProvider";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

const Login = () => {
  const { setIsLoggedIn, isLoggedIn } = useAuth();

  const [searchParams] = useSearchParams();
  // const location = useLocation();
  // const url = location.search;
  // const searchParams = new URLSearchParams(url);
  // const previousPath = location.state?.previousPath || "/";
  const previousPath = searchParams.get("redirectTo") || "/";
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate(previousPath, { replace: true });
    }
  }, [isLoggedIn]);
  function logIn() {
    setIsLoggedIn(true);
  }

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={logIn}>Login</button>
    </div>
  );
};

export default Login;
