import * as React from "react";
import { useNavigate } from "react-router";

import companyLogo from "../../../Assets/Images/CompanyLogo.svg";
import { Image } from "../../Image";
import { ROUTE } from "../../../Routes.constant";

import cn from "./CompanyLogo.module.scss";

export function CompanyLogo() {
  const navigate = useNavigate();
  return (
    <div className={cn.companyLogo} onClick={() => navigate(ROUTE.BLOG)}>
      <Image src={companyLogo} alt="Company Icon" />
    </div>
  );
}
