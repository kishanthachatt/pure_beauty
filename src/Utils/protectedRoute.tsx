import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTE } from "../Routes.constant";

interface Protected {
  children: any;
}

function Protected(props: Protected) {
  if (localStorage.getItem("bearer")) {
    return props.children;
  } else {
    return <Navigate to={ROUTE.LOGIN} />;
  }
}
export default Protected;
