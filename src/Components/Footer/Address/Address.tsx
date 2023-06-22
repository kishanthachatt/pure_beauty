import * as React from "react";
import cn from "./Address.module.scss";
export function Address() {
  return (
    <div className={cn.address}>
      <label>Address</label>
      <p>13 Brinkley Circuit Palmerston</p>
    </div>
  );
}
