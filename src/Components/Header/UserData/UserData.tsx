import * as React from "react";
import Logout from "../../../Assets/Icons/Logout.svg";

import cn from "./UserData.module.scss";

export function UserData() {
  return (
    <div className={cn.userdata}>
      <span>Logout</span>
      <img src={Logout} alt="Logout Icon" />
    </div>
  );
}
