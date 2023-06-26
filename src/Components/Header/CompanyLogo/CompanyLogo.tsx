import * as React from "react";

import companyLogo from "../../../Assets/Images/CompanyLogo.svg";
import { Image } from "../../Image";

import cn from "./CompanyLogo.module.scss";

export function CompanyLogo() {
  return (
    <div className={cn.companyLogo}>
      <Image src={companyLogo} alt="Company Icon" />
    </div>
  );
}
