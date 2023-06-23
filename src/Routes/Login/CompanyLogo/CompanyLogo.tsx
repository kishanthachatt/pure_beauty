import * as React from "react";
import companyLogo from "../../../Assets/Images/companyLogoLite.svg";
import cn from "./CompanyLogo.module.scss";

export function CompanyLogo() {
  return (
    <div className={cn.companyLogo}>
      <img
        src={companyLogo}
        alt="Company Icon"
        className={cn.companyLogo__img}
      />
    </div>
  );
}
