import React from "react";
import { useState, useEffect, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IsShowModalAccountContext } from "../../../../Context";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const ModalAccount = () => {
  const [lastRegUser, setLastRegUser] = useState();
  // Assign the context isShowModalAccount
  const { isShowModalAccount, setIsShowModalAccount } = useContext(
    IsShowModalAccountContext
  );
  const [isSelectRegisterform, setIsSelectRegisterform] = useState(true);
  const [isSelectLoginForm, setIsSelectLoginForm] = useState(false);
  useEffect(() => {
    setIsSelectRegisterform(false);
    setIsSelectLoginForm(true);
  }, [lastRegUser]);
  const registerBtnHandler = () => {
    setIsSelectRegisterform(true);
    setIsSelectLoginForm(false);
  };
  const loginBtnHandler = () => {
    setIsSelectRegisterform(false);
    setIsSelectLoginForm(true);
  };
  return (
    <div
      className="modal-account"
      onClick={() => setIsShowModalAccount(false)}
      style={{
        transform: isShowModalAccount ? "scale(1)" : "scale(0)",
      }}
    >
      <AiOutlineClose className="close-icon-modal" />
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="btn-group-modal">
          <button
            onClick={() => registerBtnHandler()}
            className={` ${
              isSelectRegisterform ? "btn-selected-LR" : "btn-select-LR"
            }`}
          >
            Register
          </button>
          <button
            onClick={() => loginBtnHandler()}
            className={` ${
              isSelectLoginForm ? "btn-selected-LR" : "btn-select-LR"
            }`}
          >
            Login
          </button>
        </div>
        {isSelectRegisterform && (
          <RegisterForm setLastRegUser={setLastRegUser} />
        )}
        {isSelectLoginForm && <LoginForm lastRegUser={lastRegUser} />}
      </div>
    </div>
  );
};

export default ModalAccount;
