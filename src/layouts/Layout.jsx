import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";
const Layout = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  return (
    <div>
      <h1>Nav</h1>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/posts"}>Posts</NavLink>
          </li>

          {!isLoggedIn && (
            <li>
              <NavLink to={"login"}>Login</NavLink>
            </li>
          )}
        </ul>

        {isLoggedIn && (
          <button
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            LogOut
          </button>
        )}
      </nav>
      <hr />

      <Outlet />
    </div>
  );
};

export default Layout;
