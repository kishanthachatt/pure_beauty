import * as React from "react";
import ShopIcon from "../../../Assets/Icons/Shop.svg";

import cn from "./Shop.module.scss";

export function Shop() {
  return (
    <div className={cn.shop}>
      <img src={ShopIcon} alt="Shop Icon" />
      <span>Shop</span>
    </div>
  );
}
