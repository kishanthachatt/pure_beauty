import * as React from "react";

import blogCoverImage from "../../../Assets/Images/blogCover.png";

import cn from "./BlogsCover.module.scss";
import { Image } from "../../../Components/Image";

export function BlogsCover() {
  return (
    <div className={cn.blogsCover}>
      <Image src={blogCoverImage} alt="Blogs Cover" className={cn.coverImage} />
    </div>
  );
}
