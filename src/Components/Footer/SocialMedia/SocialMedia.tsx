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
        <a href="https://www.instagram.com/planetmedia.aus" target="_blank">
          <Image src={Instagram} alt="Instagramlogo" />
        </a>
        <a href="https://www.facebook.com/planetmedia.aus/" target="_blank">
          <Image src={Facebook} alt="Facebooklogo" />
        </a>
      </div>
    </div>
  );
}
