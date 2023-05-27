import React from "react";
import { useState, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { RiUserShared2Fill, RiUserReceived2Fill } from "react-icons/ri";
import { BsFillCartPlusFill, BsFillCartDashFill } from "react-icons/bs";
import {
  IsShowModalAccountContext,
  WhichUserIsLoggedInContext,
  AllSelectedCustomerContext,
} from "../../../Context";

const LeftHeader = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const { setIsShowModalAccount } = useContext(IsShowModalAccountContext);
  const { whichUserLogIn } = useContext(WhichUserIsLoggedInContext);
  const { allProductsAddCard } = useContext(AllSelectedCustomerContext);
  const [nameLogIn, setNameLogIn] = useState();
  useEffect(() => {
    if (whichUserLogIn.username) {
      setIsUserLoggedIn(true);
      setNameLogIn(whichUserLogIn.username);
    } else {
      setIsUserLoggedIn(false);
    }
  }, [whichUserLogIn]);
  const [counts, setCounts] = useState();
  useEffect(() => {
    let counts = 0;
    allProductsAddCard.map((eachProduct) => {
      counts += eachProduct.count;
    });
    setCounts(counts);
  }, [allProductsAddCard]);
  return (
    <nav className="left-header">
      <ul className="menu-icons">
        <li className="cart-icon">
          <Link to="/card">
            <BsFillCartPlusFill />
            <span className="num-card">{counts}</span>
          </Link>
        </li>
        <li className="user-iocn">
          {/*if (user is login )and click on it's icon, open the dashboard PAGE
            if (user is not login) and click on it's icon,open the modal COMPONENT ((modal Component have to display in the app.js not header(beacuse it' height is 100px[I used the CONTEXT(IsShowModalAccountContext)])))
            */}
          {isUserLoggedIn ? (
            // LOGIN
            <NavLink to="/dashboard">
              <div className="login-box">
                <RiUserShared2Fill className="login-icon" />
                <span className="name-user">{nameLogIn}</span>
              </div>
            </NavLink>
          ) : (
            //       not login
            <RiUserReceived2Fill
              className="not-login-icon"
              onClick={() => setIsShowModalAccount(true)}
            />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default LeftHeader;
