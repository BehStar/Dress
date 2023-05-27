import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles/styleApp.css";
import Header from "./components/layout/header/Header";
import ModalAccount from "./components/layout/header/comps/account/ModalAccount";
import HomePage from "./components/pages/home/HomePage";
import AboutUs from "./components/pages/about/AboutUs";
import ContactUs from "./components/pages/contact/ContactUs";
import Products from "./components/pages/products/Products";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Prof from "./components/pages/dashboard/comps/Prof";
import Address from "./components/pages/dashboard/comps/Address";
import ResetPassword from "./components/pages/dashboard/comps/ResetPassword";
import Product from "./components/pages/product/Product";
import Cart from "./components/pages/card/Cart";
import { AllSelectedCustomerContext } from "./components/Context";

import {
  // DataContext,
  IsShowModalAccountContext,
  UsersContext,
  WhichUserIsLoggedInContext,
} from "./components/Context";
import { data } from "./components/Context";
const App = () => {
  //Show modal account (LoginRegister Modal)
  const [isShowModalAccount, setIsShowModalAccount] = useState(false);

  //set Users in the local Storage
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("USERS")) || [];
  });

  //which user is logging in...
  const [whichUserLogIn, setWhichUserLogIn] = useState(() => {
    return JSON.parse(localStorage.getItem("WHICH_USER_LOGIN")) || {};
  });
  useEffect(() => {
    localStorage.setItem("USERS", JSON.stringify(users));
    localStorage.setItem("WHICH_USER_LOGIN", JSON.stringify(whichUserLogIn));
    // console.log("inja", whichUserLogIn);
  }, []);
  //set All Products that customers add to the card
  const [allProductsAddCard, setAllProductsAddCard] = useState(() => {
    return JSON.parse(localStorage.getItem("ADD_TO_CARD")) || [];
  });
  return (
    <div>
      <AllSelectedCustomerContext.Provider
        value={{ allProductsAddCard, setAllProductsAddCard }}
      >
        <UsersContext.Provider value={{ users, setUsers }}>
          <WhichUserIsLoggedInContext.Provider
            value={{ whichUserLogIn, setWhichUserLogIn }}
          >
            <IsShowModalAccountContext.Provider
              value={{ isShowModalAccount, setIsShowModalAccount }}
            >
              <Header />
              <ModalAccount />
            </IsShowModalAccountContext.Provider>
            <Routes>
              <Route path="/*" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:idP" element={<Product data={data} />} />
              <Route path="/card" element={<Cart />} />
              {whichUserLogIn.username ? (
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route path="profile" element={<Prof />} />
                  <Route path=":address" element={<Address />} />
                  <Route path=":reset-password" element={<ResetPassword />} />
                </Route>
              ) : (
                <Route
                  path="/dashboard"
                  element={<Navigate replace to="/" />}
                />
              )}
            </Routes>
          </WhichUserIsLoggedInContext.Provider>
        </UsersContext.Provider>
      </AllSelectedCustomerContext.Provider>
    </div>
  );
};

export default App;
