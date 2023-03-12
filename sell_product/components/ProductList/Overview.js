import React from "react";
import { useRouter } from "next/router";
import { If } from "react-haiku";

export default function Overview() {
  const { asPath } = useRouter();
  console.log(asPath);
  return (
    <div className="py-24 text-center">
      <If isTrue={asPath.startsWith("/women")}>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Women
        </h1>
      </If>
      <If isTrue={asPath.startsWith("/men")}>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Men
        </h1>
      </If>
      <If isTrue={asPath.startsWith("/newArrivals")}>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          New Arrivals
        </h1>
      </If>
      <If isTrue={asPath.startsWith("/trending")}>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Trending
        </h1>
      </If>
      <p className="max-w-3xl mx-auto mt-4 text-base text-gray-500">
        Thoughtfully designed objects for the workspace, home, and travel.
      </p>
    </div>
  );
}
