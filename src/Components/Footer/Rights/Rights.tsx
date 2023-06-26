import * as React from "react";

import PlanetMeida from "../../../Assets/Icons/planetMedia.svg";
import { Image } from "../../Image";

import cn from "./Rights.module.scss";

export function Rights() {
  return (
    <div className={cn.rights}>
      <p>
        <span>© 2022 PURE BEAUTY. POWERED BY </span>
        <a href="https://www.planetmedia.com.au/">
          <Image src={PlanetMeida} alt="Planet Meida" />
        </a>
      </p>
      <p>ALL RIGHTS RESERVED.</p>
    </div>
  );
}
