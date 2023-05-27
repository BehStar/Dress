import React from "react";
import EachBoxProducts from "./EachBoxProducts";
import { data } from "../../../Context";
const PoloShirtsComp = () => {
  return (
    <div className="page">
      <div className="container-page fil">
        <ul className="list-all-products">
          {data.map((product) => {
            return (
              product.category === "polo-shirts" && (
                <li key={product.idP}>
                  <EachBoxProducts product={product} />
                </li>
              )
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PoloShirtsComp;
