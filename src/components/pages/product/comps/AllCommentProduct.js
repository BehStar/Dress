import React from "react";
import { useContext } from "react";
import { CommentsProductsContext } from "../../../Context";
const AllCommentProduct = ({ idP }) => {
  const idProduc = idP;
  const { comments } = useContext(CommentsProductsContext);
  const reversedComments = comments.reverse();

  return (
    <div className="page">
      <div className="container-page fourth-container-page">
        <h3>Comments about this product:</h3>
        <ul className="list-comments">
          {comments &&
            reversedComments.map((comment, ind) => {
              if (comment.idProduct === idProduc) {
                return (
                  <li className="each-comment" key={ind}>
                    <div className="name-idea">{comment.nameUser}</div>
                    <p className="text-idea">{comment.comment}</p>
                  </li>
                );
              }
            })}
        </ul>
      </div>
    </div>
  );
};

export default AllCommentProduct;
