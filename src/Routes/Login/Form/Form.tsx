import * as React from "react";

import { FormProps as Props } from "./Form.interface";

import cn from "./Form.module.scss";

export function Form(props: Props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className={cn.form}>
      <div>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button className={cn.button} onClick={() => alert("hi")}>
          Login
        </button>
      </div>
    </div>
  );
}
