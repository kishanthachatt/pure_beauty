import * as React from "react";

import { BlogsProps as Props } from "./Blogs.interface";
import { Title } from "../../Components/Title";

import cn from "./Home.module.scss";

export function Blogs(props: Props) {
  return (
    <div>
      <Title title="Blogs" />
    </div>
  );
}
