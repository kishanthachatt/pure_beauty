import * as React from "react";

import { ProductCardProps as Props } from "./ProductCard.interface";

import cn from "./ProductCard.module.scss";

export function ProductCard(props: Props) {
  return (
    <div className={cn.productCardContainer}>
      <img src={props.image} alt="Product image" />
      <div className={cn.text}>
        <span className={cn.category}>{props.category}</span>
        <h4 className={cn.name}>{props.name}</h4>
        <span className={cn.price}>${props.price}</span>
      </div>
    </div>
  );
}
