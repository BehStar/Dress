import React from "react";
import { useState, useEffect, useContext } from "react";
import HeaderTable from "./comps/HeaderTable";
import EachItemProduct from "./comps/EachItemProduct";
import LastLineTable from "./comps/LastLineTable";
import "../../styles/styleCart.css";
import { AllSelectedCustomerContext } from "../../Context";

const Cart = () => {
  const { allProductsAddCard } = useContext(AllSelectedCustomerContext);
  //Create and Assign Total Cart
  const [total, setTotal] = useState();
  let sumTotal = 0;
  useEffect(() => {
    allProductsAddCard.map((eachProduct) => {
      sumTotal += eachProduct.sum;
    });
    setTotal(sumTotal.toLocaleString());
  }, [allProductsAddCard]);

  return (
    <div className="page">
      <div className="container-page">
        <h1>this is cart page</h1>
        <HeaderTable />
        {allProductsAddCard.map((eachProduct, eachInd) => {
          return (
            <li key={eachInd}>
              <EachItemProduct eachProduct={eachProduct} eachInd={eachInd} />
            </li>
          );
        })}
        <LastLineTable total={total} />
      </div>
    </div>
  );
};

export default Cart;
