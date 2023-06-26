import * as React from "react";
import { HeaderProps as Props } from "./Header.interface";
import { Shop } from "./Shop";
import { CompanyLogo } from "./CompanyLogo";
import { UserData } from "./UserData";

import cn from "./Header.module.scss";

export function Header(props: Props) {
  return (
    <header className={cn.header}>
      <Shop />
      <CompanyLogo />
      <UserData />
    </header>
  );
}
