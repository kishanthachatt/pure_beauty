import * as React from "react";

import { CoverImageProps as Props } from "./CoverImage.interface";
import { Image } from "../../../../Components/Image";

export function CoverImage(props: Props) {
  return <Image src={props.image} alt="Cover Image" />;
}
