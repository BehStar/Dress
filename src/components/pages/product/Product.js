import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import "../../styles/styleProduct.css";
import { CommentsProductsContext } from "../../Context";
import BreadCrumbs from "./comps/BreadCrumbs";
import FixInfoProduct from "./comps/FixInfoProduct";
import CommentProduct from "./comps/CommentProduct";
import AllCommentProduct from "./comps/AllCommentProduct";
import StarsBox from "./comps/StarsBox";
import { AllSelectedCustomerContext } from "../../Context";

const Product = ({ data }) => {
  const { idP } = useParams();
  const colorRef = useRef();
  const { allProductsAddCard, setAllProductsAddCard } = useContext(
    AllSelectedCustomerContext
  );
  const [selectedData] = useState(() => data[idP - 1]);
  const [selectedCustomer, setSelectedCustomer] = useState({});
  const [allSelectedCustomerPros, setAllSelectedCustomerPros] = useState([]);
  const [infoProductSelected, setInfoProductSelected] = useState({});
  const [countSelected, setCountSelected] = useState(1);
  const [bigImg, setBigImg] = useState(selectedData.selectImgSrc);
  const [clickImg, setClickImg] = useState();

  //ALl Comments
  const [comments, setComments] = useState(() => {
    return JSON.parse(localStorage.getItem("COMMENTS_PRODUCTS")) || [];
  });
  const [idPro] = useState(idP);
  useEffect(() => {
    selectedData.infoP.map((eachPro) => {
      if (eachPro.color === selectedCustomer.color) {
        setInfoProductSelected({
          sColor: eachPro.color,
          sSizes: eachPro.sizes,
          sOldPrice: eachPro.oldPrice,
          sNewPrice: eachPro.newPrice,
          sImages: eachPro.srcImgs,
        });
      }
    });
  }, [selectedCustomer]);
  // SET BigImage=================
  useEffect(() => {
    if (infoProductSelected.sImages) {
      setBigImg(infoProductSelected.sImages[0]);
    }
  }, [infoProductSelected]);
  useEffect(() => {
    if (clickImg) {
      setBigImg(clickImg);
    }
  }, [clickImg]);
  // COUNT and add to card BUTTON------------------
  const minuseHandler = () => {
    countSelected !== 1 && setCountSelected(countSelected - 1);
  };
  const [isAdd, setIsAdd] = useState(false);
  //btn Add to Card
  const btnAddHandler = () => {
    if (selectedCustomer.color && selectedCustomer.size) {
      window.alert("added it to card");
      setIsAdd(true);
    } else {
      window.alert("please fill the all fields");
    }
  };
  useEffect(() => {
    if (isAdd) {
      setAllProductsAddCard([
        ...allProductsAddCard,
        {
          idP: idP,
          title: selectedData.titleP,
          ...selectedCustomer,
          count: countSelected,
          price: infoProductSelected.sNewPrice[selectedCustomer.indSize],
          image: infoProductSelected.sImages[0],
          sum:
            infoProductSelected.sNewPrice[selectedCustomer.indSize] *
            countSelected,
        },
      ]);
      setIsAdd(false);
    }
    console.log("ALL in effe", allSelectedCustomerPros);
    console.log("ALLAll in effe", allProductsAddCard);
  }, [isAdd]);
  useEffect(() => {
    localStorage.setItem("ADD_TO_CARD", JSON.stringify(allProductsAddCard));
  }, [allProductsAddCard]);

  return (
    <CommentsProductsContext.Provider value={{ comments, setComments, idPro }}>
      <div className="page">
        <div className="container-page">
          <BreadCrumbs selectedData={selectedData} />
          <h2 className="title-response">{selectedData.titleP}</h2>
          <div className="single-page">
            <div className="single-right">
              <div className="big-box-img">
                <img src={bigImg} />
              </div>
              <div className="small-box-img">
                {infoProductSelected.sColor &&
                  infoProductSelected.sImages.map((eachImg, ind) => {
                    return (
                      <li
                        className="box-img"
                        key={ind}
                        onClick={() => setClickImg(eachImg)}
                      >
                        <img src={eachImg} />
                      </li>
                    );
                  })}
              </div>
            </div>
            <div className="single-left">
              <h2 className="title-product">{selectedData.titleP}</h2>
              <div className="idea-stars">
                <StarsBox />
                <div className="idea">
                  <a href="#comment-pro">write your idea</a>
                </div>
              </div>
              <div className="your-select">
                <span className="title">: Your selected color</span>
                <span className="choose">{selectedCustomer.color}</span>
              </div>
              <ul className="colors">
                {selectedData.infoP.map((eachP, ind) => {
                  return (
                    <span
                      key={ind}
                      ref={colorRef}
                      className="box-color"
                      style={{ backgroundColor: eachP.color }}
                      onClick={() =>
                        setSelectedCustomer({ color: eachP.color })
                      }
                    >
                      {eachP.color}
                    </span>
                  );
                })}
              </ul>
              <div className="your-select">
                <span className="title">: Your selected size</span>
                <span className="choose">{selectedCustomer.size}</span>
              </div>
              <ul className="sizes">
                {infoProductSelected.sSizes &&
                  infoProductSelected.sSizes.map((eachSize, ind) => {
                    return (
                      <span
                        key={ind}
                        className="size"
                        onClick={(e) =>
                          setSelectedCustomer({
                            ...selectedCustomer,
                            size: e.target.textContent,
                            indSize: ind,
                          })
                        }
                      >
                        {eachSize}
                      </span>
                    );
                  })}
              </ul>
              <div className="your-select box-price">
                <span className="title">: Price</span>
                <span className="choose">
                  <div className="price">
                    <span className="old-price">
                      {selectedCustomer.size &&
                        infoProductSelected.sOldPrice[
                          selectedCustomer.indSize
                        ].toLocaleString()}
                    </span>
                    <span className="tooman"> T </span>
                  </div>
                  <div className="price">
                    <span className="new-price">
                      {selectedCustomer.size &&
                        infoProductSelected.sNewPrice[
                          selectedCustomer.indSize
                        ].toLocaleString()}
                    </span>
                    <span className="tooman"> T </span>
                  </div>
                </span>
              </div>
              <div className="count-box">
                <button
                  className="count-sign minus-sign"
                  onClick={() => minuseHandler()}
                >
                  -
                </button>
                <div className="count-number">{countSelected}</div>
                <button
                  className="count-sign plus-sign"
                  onClick={() => setCountSelected(countSelected + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="add-to-card-btn"
                onClick={() => btnAddHandler()}
              >
                Add to Card
              </button>
            </div>
          </div>
        </div>
        <FixInfoProduct />
        <CommentProduct idP={idP} />
        <AllCommentProduct idP={idP} />
      </div>
    </CommentsProductsContext.Provider>
  );
};

export default Product;
