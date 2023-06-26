import * as React from "react";

import Logout from "../../../Assets/Icons/Logout.svg";
import { Image } from "../../Image";

import cn from "./UserData.module.scss";

export function UserData() {
  return (
    <div className={cn.userdata}>
      <span>Logout</span>
      <Image src={Logout} alt="Logout Icon" />
    </div>
  );
}
