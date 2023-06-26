import * as React from "react";

import { TitleProps as Props } from "./Title.interface";

import cn from "./Title.module.scss";

export function Title(props: Props) {
  return (
    <div className={cn.title}>
      <div className={cn.titleBackground}>
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}
