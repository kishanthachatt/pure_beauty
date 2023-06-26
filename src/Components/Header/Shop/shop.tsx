import * as React from "react";
import { useNavigate } from "react-router";

import ShopIcon from "../../../Assets/Icons/Shop.svg";

import cn from "./Shop.module.scss";
import { ROUTE } from "../../../Routes.constant";

export function Shop() {
  const navigate = useNavigate();
  return (
    <div className={cn.shop} onClick={() => navigate(ROUTE.SHOP)}>
      <img src={ShopIcon} alt="Shop Icon" />
      <span>Shop</span>
    </div>
  );
}
