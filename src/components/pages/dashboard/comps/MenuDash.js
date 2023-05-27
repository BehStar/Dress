import React from "react";
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { WhichUserIsLoggedInContext } from "../../../Context";

const MenuDash = () => {
  const { setWhichUserLogIn } = useContext(WhichUserIsLoggedInContext);

  const [isSureExit, setIsSureExit] = useState(false);
  const exitAccountHanlder = () => {
    setIsSureExit(window.confirm("Are you sure you want to exit account?"));
  };

  useEffect(() => {
    if (isSureExit) {
      setWhichUserLogIn({});
    }
  }, [isSureExit]);
  return (
    <ul className="menu-in-dash">
      <li>
        <NavLink
          to="profile"
          className={({ isActive }) => (isActive ? "active-menu-dash" : "")}
        >
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="address"
          className={({ isActive }) => (isActive ? "active-menu-dash" : "")}
        >
          Address
        </NavLink>
      </li>
      <li>
        <NavLink
          to="reset-password"
          className={({ isActive }) => (isActive ? "active-menu-dash" : "")}
        >
          Reset Password
        </NavLink>
      </li>
      <li>
        <button
          className="btn-in-menu-dash"
          onClick={() => exitAccountHanlder()}
        >
          Exit
        </button>
      </li>
    </ul>
  );
};

export default MenuDash;
