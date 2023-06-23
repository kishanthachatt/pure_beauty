import * as React from "react";

import { LoginProps as Props } from "./Login.interface";
import { CompanyLogo } from "./CompanyLogo";
import LoginImage from "../../Assets/Images/loginImage.png";

import cn from "./Login.module.scss";
import { Form } from "./Form";

export function Login(props: Props) {
  return (
    <div className={cn.loginContainer}>
      <div className={cn.leftside}>
        <CompanyLogo />
        <h3>Login</h3>
        <Form />
      </div>
      <div className={cn.rightside}>
        {/* <img src={LoginImage} alt="Login Image" /> */}
      </div>
    </div>
  );
}
