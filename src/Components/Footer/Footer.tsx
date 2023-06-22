import * as React from "react";
import { FooterProps as Props } from "./Footer.interface";
import { CompanyLogo } from "./CompanyLogo";
import { Address } from "./Address";
import { SocialMedia } from "./SocialMedia";
import { Rights } from "./Rights/Rights";

import cn from "./Footer.module.scss";

export function Footer(props: Props) {
  return (
    <div className={cn.footer}>
      <div className={cn.footer__upper}>
        <CompanyLogo />
        <Address />
        <SocialMedia />
      </div>
      <div>
        <Rights />
      </div>
    </div>
  );
}
