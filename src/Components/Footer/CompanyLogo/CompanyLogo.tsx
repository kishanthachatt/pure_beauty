import * as React from "react";

import companyLogo from "../../../Assets/Images/companyLogoLite.svg";
import { Image } from "../../Image";

import cn from "./CompanyLogo.module.scss";

export function CompanyLogo() {
  return (
    <div className={cn.companyLogo}>
      <Image
        src={companyLogo}
        alt="Company Icon"
        className={cn.companyLogo__img}
      />
    </div>
  );
}
