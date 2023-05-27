import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = ({ selectedData }) => {
  const location = useLocation();
  return (
    <div>
      <nav>
        {/* <Link
          to="/"
          className={
            location.pathname === "/"
              ? "breadcrumb-active"
              : "breadcrumb-not-active"
          }
        >
          Home
        </Link>
        <span className="breadcrumb-arrow">&gt;</span> */}

        <Link
          to="/products"
          className={
            location.pathname.startsWith("/products")
              ? "breadcrumb-active"
              : "breadcrumb-not-active"
          }
        >
          Products
        </Link>
        <span className="breadcrumb-arrow">&gt;</span>

        <Link
          //   to="/products/1"
          //   to={`/products/${selectedData.category}`}
          className={
            location.pathname === "/products/1"
              ? "breadcrumb-active"
              : "breadcrumb-not-active"
          }
        >
          {selectedData.titleP}
        </Link>
      </nav>
    </div>
  );
};

export default BreadCrumbs;
