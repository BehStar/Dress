import React from "react";
import { useState, useRef, useEffect, useContext } from "react";
import {
  WhichUserIsLoggedInContext,
  CommentsProductsContext,
  UsersContext,
} from "../../../Context";

const CommentProduct = ({ idP }) => {
  const commentRef = useRef();
  const { whichUserLogIn } = useContext(WhichUserIsLoggedInContext);
  const { comments, setComments } = useContext(CommentsProductsContext);
  const { users, setUsers } = useContext(UsersContext);
  const [commentPro, setCommentPro] = useState();
  const btnAddCommentHandler = () => {
    if (whichUserLogIn.id && commentRef.current.value !== "") {
      setCommentPro({
        idUser: whichUserLogIn.id,
        nameUser: whichUserLogIn.username,
        idProduct: idP,
        comment: commentRef.current.value,
      });
      window.alert("your comment has been sabt");
      commentRef.current.value = "";
    } else {
      window.alert("Please login first and write your comment");
    }
  };
  useEffect(() => {
    if (commentPro) {
      setComments([...comments, commentPro]);
    }
  }, [commentPro]);
  useEffect(() => {
    localStorage.setItem("COMMENTS_PRODUCTS", JSON.stringify(comments));
    if (commentPro) {
      const updateUser = users.map((eachUser) => {
        if (eachUser.id === commentPro.idUser) {
          return {
            ...eachUser,
            tickets: [
              ...eachUser.tickets,
              { idProduct: commentPro.idProduct, comment: commentPro.comment },
            ],
          };
        }
        {
          return eachUser;
        }
      });
      setUsers(updateUser);
    }
  }, [comments]);

  useEffect(() => {
    // console.log("hi from Comment Product");
    localStorage.setItem("USERS", JSON.stringify(users));
  }, [users]);
  return (
    <div className="page">
      <div className="container-page third-container-page">
        <h3>What is your idea about this product?</h3>
        <form className="box-txt" onSubmit={(e) => e.preventDefault()}>
          <textarea
            className="txt-comment-product"
            ref={commentRef}
            id="comment-pro"
          ></textarea>
          <button
            className="btn-comment-product"
            onClick={() => btnAddCommentHandler()}
          >
            Add Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentProduct;
