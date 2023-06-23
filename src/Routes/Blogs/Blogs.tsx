import * as React from "react";

import { BlogsProps as Props } from "./Blogs.interface";

import cn from "./Home.module.scss";
import { Title } from "../../Components/Title";

export function Blogs(props: Props) {
  return (
    <div>
      <Title title="Blogs" />
    </div>
  );
}
