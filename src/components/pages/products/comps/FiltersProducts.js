import React from "react";
import { NavLink } from "react-router-dom";

const FiltersProducts = () => {
  return (
    <div className="page">
      {/* <div className="container-page"> */}
      <div className="row-filter">
        <a>all products</a>
        <NavLink
          to="/products/T-shirts"
          className={({ isActive }) => (isActive ? "filterItem" : "")}
        >
          T-shirts
        </NavLink>
        <NavLink
          to="/products/shirts"
          className={({ isActive }) => (isActive ? "filterItem" : "")}
        >
          Shirts
        </NavLink>
        <NavLink
          to="/products/polo-shirts"
          className={({ isActive }) => (isActive ? "filterItem" : "")}
        >
          Polo-shirts
        </NavLink>
      </div>
      {/* </div> */}
    </div>
  );
};

export default FiltersProducts;
