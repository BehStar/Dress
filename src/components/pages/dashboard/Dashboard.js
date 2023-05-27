import React from "react";
import { Outlet } from "react-router-dom";
import "../../styles/styleDashboard.css";
import MenuDash from "./comps/MenuDash";

const Dashboard = () => {
  return (
    <div className="page">
      <div className="container-page dash-page">
        <MenuDash />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
