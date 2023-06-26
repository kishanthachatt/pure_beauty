import * as React from "react";

import { ImageProps as Props } from "./Image.interface";

export function Image(props: Props) {
  return <img src={props.src} className={props.className} alt={props.alt} />;
}
