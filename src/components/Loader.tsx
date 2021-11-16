import React from "react";
import { WrapperLoader } from "../styles";
import "./loader.css";

export function Loader() {
  return (
    <WrapperLoader>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </WrapperLoader>
  );
}
