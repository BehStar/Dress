import React from "react";

const LastLineTable = ({ total }) => {
  return (
    <div>
      <ul className="last-line-table">
        <li className="title-total">TOTAL</li>
        <li className="price-total">{total}</li>
      </ul>
    </div>
  );
};

export default LastLineTable;
