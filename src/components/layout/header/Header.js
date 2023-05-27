import React from "react";
import "../../styles/styleHeader.css";
import LeftHeader from "./comps/LeftHeader";
import RightHeader from "./comps/RightHeader";

const Header = () => {
  return (
    <div className="header-site">
      <div className="header-container">
        <LeftHeader />
        <RightHeader />
      </div>
    </div>
  );
};

export default Header;
