import React from "react";
import Overview from "./Overview";
import ProductGrid1 from "./ProductGrid1";
import Collection from "./Collection";
import ProductGrid2 from "./ProductGrid2";

export default function ProductList() {
  return (
    <>
      <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <Overview />
        <ProductGrid1 />
        <Collection />
        <ProductGrid2 />
      </div>
    </>
  );
}
