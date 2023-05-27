import React from "react";
import { useState, useEffect, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { AllSelectedCustomerContext } from "../../../Context";

const EachItemProduct = ({ eachProduct, eachInd }) => {
  const { allProductsAddCard, setAllProductsAddCard } = useContext(
    AllSelectedCustomerContext
  );
  const [isShowModalImg, setIsShowModalImg] = useState(false);
  // ====================
  const btnUpCountHandler = () => {
    const newCount = eachProduct.count + 1;
    const updateNewAll = allProductsAddCard.map((eachP, indP) => {
      if (indP === eachInd) {
        return { ...eachP, count: newCount, sum: newCount * eachP.price };
      } else {
        return eachP;
      }
    });
    setAllProductsAddCard(updateNewAll);
  };
  // ===============
  const btnDownCountHandler = () => {
    let newCount;
    if (eachProduct.count !== 1) {
      newCount = eachProduct.count - 1;
    } else {
      newCount = 1;
    }
    const updateNewAll = allProductsAddCard.map((eachP, indP) => {
      if (indP === eachInd) {
        return { ...eachP, count: newCount, sum: newCount * eachP.price };
      } else {
        return eachP;
      }
    });
    setAllProductsAddCard(updateNewAll);
  };
  const removeHandler = () => {
    const updateNewAll = [...allProductsAddCard];
    updateNewAll.splice(eachInd, 1);
    setAllProductsAddCard(updateNewAll);
  };
  // ===================
  useEffect(() => {
    localStorage.setItem("ADD_TO_CARD", JSON.stringify(allProductsAddCard));
  }, [allProductsAddCard]);

  return (
    <div>
      <ul className="row-item">
        <li className="close-product " onClick={() => removeHandler()}>
          <AiOutlineClose />
        </li>
        <li className="image-product">
          <img
            src={eachProduct.image}
            onClick={() => setIsShowModalImg(!isShowModalImg)}
          />
        </li>
        <li className="name-product">
          <span className="name">{eachProduct.title}</span>
          <span>{eachProduct.color}</span>
          <span>{eachProduct.size}</span>
        </li>
        <li className="count-product">
          <div className="box-signs">
            <span className="up" onClick={() => btnUpCountHandler()}>
              <BsCaretUpFill />
            </span>
            <span className="down" onClick={() => btnDownCountHandler()}>
              <BsCaretDownFill />
            </span>
          </div>
          <div className="count-num">{eachProduct.count}</div>
        </li>
        <li className="each-price-product">
          {eachProduct.price.toLocaleString()}
        </li>
        <li className="total-price-product">
          {eachProduct.sum.toLocaleString()}
        </li>
      </ul>
      <div
        className="modal-product-img"
        style={{ transform: isShowModalImg ? "scale(1)" : "scale(0)" }}
        onClick={() => setIsShowModalImg(!isShowModalImg)}
      >
        <img src={eachProduct.image} onClick={(e) => e.stopPropagation()} />
        <AiOutlineClose className="close-modal" />
      </div>
    </div>
  );
};

export default EachItemProduct;
