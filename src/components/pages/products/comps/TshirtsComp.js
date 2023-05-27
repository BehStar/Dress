import React from "react";
import EachBoxProducts from "./EachBoxProducts";
import { data } from "../../../Context";

const TshirtsComp = () => {
  return (
    <div className="page">
      <div className="container-page">
        <ul className="list-all-products">
          {data.map((product) => {
            return (
              product.category === "T-shirts" && (
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

export default TshirtsComp;
