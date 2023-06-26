import * as React from "react";

import blogCoverImage from "../../../Assets/Images/blogCover.png";

import cn from "./BlogsCover.module.scss";

export function BlogsCover() {
  return (
    <div className={cn.blogsCover}>
      <img src={blogCoverImage} alt="Blogs Cover" className={cn.coverImage} />;
    </div>
  );
}
