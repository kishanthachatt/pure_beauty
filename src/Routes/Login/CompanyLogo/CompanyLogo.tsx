import * as React from "react";
import companyLogo from "../../../Assets/Images/companyLogoLite.svg";
import cn from "./CompanyLogo.module.scss";
import { Image } from "../../../Components/Image";

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
