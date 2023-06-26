import * as React from "react";

import { LoginProps as Props } from "./Login.interface";
import { CompanyLogo } from "./CompanyLogo";
import LoginImage from "../../Assets/Images/loginImage.png";
import { Image } from "../../Components/Image";
import { Form } from "./Form";

import cn from "./Login.module.scss";

export function Login(props: Props) {
  return (
    <div className={cn.loginContainer}>
      <div className={cn.leftside}>
        <CompanyLogo />
        <h3>Login</h3>
        <Form />
      </div>
      <div className={cn.rightside}>
        <Image src={LoginImage} alt="Login Image" />
      </div>
    </div>
  );
}
