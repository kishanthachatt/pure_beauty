import * as React from "react";
import { useNavigate } from "react-router";

import { BlogCardProps as Props } from "./BlogCard.interface";
import demoImage from "../../../Assets/Images/BlogsdemoImage.png";

import cn from "./BlogCard.module.scss";
import { ROUTE } from "../../../Routes.constant";

export function BlogCard(props: Props) {
  const navigate = useNavigate();

  return (
    <div
      className={cn.blogsCard}
      onClick={() => navigate(`/blogdetail/${props.id}`)}
    >
      {props.photoLeftAlign ? (
        <>
          <div className={cn.cardsImage}>
            <img
              src={props.image ? props.image : demoImage}
              alt="Blogs Image"
            />
          </div>
          <div className={cn.cardsTypo}>
            <p>{props.type}</p>
            <h4>{props.title}</h4>
          </div>
        </>
      ) : (
        <>
          <div className={cn.cardsTypo}>
            <p>{props.type}</p>
            <h4>{props.title}</h4>
          </div>
          <div className={cn.cardsImage}>
            <img
              src={props.image ? props.image : demoImage}
              alt="Blogs Image"
            />
          </div>
        </>
      )}
    </div>
  );
}
