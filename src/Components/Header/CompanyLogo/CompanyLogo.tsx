import * as React from "react";
import companyLogo from "../../../Assets/Images/CompanyLogo.svg";
import cn from "./CompanyLogo.module.scss";

export function CompanyLogo() {
  return (
    <div className={cn.companyLogo}>
      <img src={companyLogo} alt="Company Icon" />
    </div>
  );
}
