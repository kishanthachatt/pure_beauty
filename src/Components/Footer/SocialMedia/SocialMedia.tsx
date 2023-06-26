import * as React from "react";

import Instagram from "../../../Assets/Icons/instagram.svg";
import Facebook from "../../../Assets/Icons/facebook.svg";
import { Image } from "../../Image";

import cn from "./SocialMedia.module.scss";

export function SocialMedia() {
  return (
    <div className={cn.socialMedia}>
      <label>SOCIAL MEDIA</label>
      <div>
        <Image src={Instagram} alt="Instagramlogo" />
        <Image src={Facebook} alt="Facebooklogo" />
      </div>
    </div>
  );
}
