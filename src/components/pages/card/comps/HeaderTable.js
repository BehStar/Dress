import React from "react";

const HeaderTable = () => {
  return (
    <div>
      <ul className="row-header-title">
        <li className="close-product">close</li>
        <li className="image-product">Product's image</li>
        <li className="name-product">Product's Name</li>
        <li className="count-product">Count</li>
        <li className="each-price-product">Each</li>
        <li className="total-price-product">Total</li>
      </ul>
    </div>
  );
};

export default HeaderTable;
