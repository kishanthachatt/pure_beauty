import * as React from "react";
import { useNavigate } from "react-router";

import ShopIcon from "../../../Assets/Icons/Shop.svg";
import { Image } from "../../Image";
import { ROUTE } from "../../../Routes.constant";

import cn from "./Shop.module.scss";

export function Shop() {
  const navigate = useNavigate();
  return (
    <div className={cn.shop} onClick={() => navigate(ROUTE.SHOP)}>
      <Image src={ShopIcon} alt="Shop Icon" />
      <span>Shop</span>
    </div>
  );
}
