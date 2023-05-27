import React from "react";
import "../../styles/styleProducts.css";
// import FiltersProducts from "./comps/FiltersProducts";
import { data } from "../../Context";
import EachBoxProducts from "./comps/EachBoxProducts";

const Products = () => {
  return (
    <div className="page">
      <div className="container-page">
        <h1>this is products page</h1>
        {/* <FiltersProducts /> */}
        {/* <Outlet /> */}
        <ul className="list-all-products">
          {data.map((product) => {
            return (
              <li key={product.idP}>
                <EachBoxProducts product={product} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Products;
