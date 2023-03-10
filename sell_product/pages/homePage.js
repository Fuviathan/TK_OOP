import React from "react";
import Header from "../components/HomePage/Header/Header";
import Overview from "../components/HomePage/Overview";

export default function HomePage() {
  return (
    <>
      <div className="fixed inset-0">
        <Header />
        <Overview />
      </div>
    </>
  );
}
