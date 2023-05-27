import React from "react";
import { useNavigate } from "react-router-dom";

const EachBoxProducts = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="each-box-products">
      <h5 className="title-product">{product.titleP}</h5>
      <div className="box-img">
        <img src={product.selectImgSrc} alt="" />
      </div>
      {/* <div className="two-price">
        <div className="old-price">
          <span className="tooman">tooman</span>
          <span className="o-price">55555000</span>
        </div>
        <div className="new-price">
          <span className="tooman">tooman</span>
          <span className="n-price">55555000</span>
        </div>
      </div> */}
      <div className="one-price">
        <span className="tooman">tooman</span>
        <span className="price">{product.avgPrice.toLocaleString()}</span>
      </div>
      <button className="submit" onClick={() => navigate(`${product.idP}`)}>
        More...
      </button>
    </div>
  );
};

export default EachBoxProducts;
