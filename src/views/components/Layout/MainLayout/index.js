import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import getPageTitle from "../../../../utils/getPageTitle";

import "./style.scss";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="container">
      <div className="container__title">{getPageTitle(location.pathname)}</div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
