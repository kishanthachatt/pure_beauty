import * as React from "react";
import { useNavigate } from "react-router";

import { LoginProps as Props } from "./Login.interface";
import { CompanyLogo } from "./CompanyLogo";
import LoginImage from "../../Assets/Images/loginImage.png";
import { Image } from "../../Components/Image";
import { Form } from "./Form";
import { ROUTE } from "../../Routes.constant";

import cn from "./Login.module.scss";

export function Login(props: Props) {
  const navigate = useNavigate();
  return (
    <div className={cn.loginContainer}>
      <div className={cn.leftside}>
        <CompanyLogo />
        <h3>Login</h3>
        <Form />
        <p className={cn.loginShopText}>
          <span>Login </span>
          <span>or</span>
          <span
            onClick={() => navigate(ROUTE.SHOP)}
            className={cn.loginShopText__link}
          >
            shop
          </span>
        </p>
      </div>
      <div className={cn.rightside}>
        <Image src={LoginImage} alt="Login Image" />
      </div>
    </div>
  );
}
