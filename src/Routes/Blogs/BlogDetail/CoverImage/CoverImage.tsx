import * as React from "react";
import { CoverImageProps as Props } from "./CoverImage.interface";

export function CoverImage(props: Props) {
  return <img src={props.image} alt="Cover Image" />;
}
