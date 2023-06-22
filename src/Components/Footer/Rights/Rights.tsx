import * as React from "react";
import PlanetMeida from "../../../Assets/Icons/planetMedia.svg";

import cn from "./Rights.module.scss";

export function Rights() {
  return (
    <div className={cn.rights}>
      <p>
        <span>© 2022 PURE BEAUTY. POWERED BY </span>
        <img src={PlanetMeida} alt="Planet Meida" />
      </p>
      <p>ALL RIGHTS RESERVED.</p>
    </div>
  );
}