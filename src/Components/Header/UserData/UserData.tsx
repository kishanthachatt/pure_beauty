import * as React from "react";
import { useNavigate } from "react-router";

import Logout from "../../../Assets/Icons/Logout.svg";
import { Image } from "../../Image";
import { validToken } from "../../../Utils/common.utils";

import cn from "./UserData.module.scss";
import { ROUTE } from "../../../Routes.constant";

export function UserData() {
  let token = validToken();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate(ROUTE.LOGIN);
  };
  return (
    <>
      {token ? (
        <div className={cn.userdata} onClick={logout}>
          <span>Logout</span>
          <Image src={Logout} alt="Logout Icon" />
        </div>
      ) : (
        <div className={cn.userdata} onClick={() => navigate(ROUTE.LOGIN)}>
          <span>Login</span>
          <Image src={Logout} alt="Logout Icon" />
        </div>
      )}
    </>
  );
}
