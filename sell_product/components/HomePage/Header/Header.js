import React from "react";
import HeaderUp from "./HeaderUp";
import HeaderDown from "./HeaderDown";

export default function Header() {
  return (
    <>
      <div className="relative inset-0 z-10">
        <HeaderUp />
        <HeaderDown />
      </div>
    </>
  );
}
