import React from "react";
import Link from 'next/link'

export default function Overview() {
  return (
    <>
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <img
          src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
          alt=""
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 opacity-50"
      />
      <div className="relative flex flex-col items-center max-w-3xl px-6 py-32 mx-auto text-center sm:py-64 lg:px-0">
        <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
          New arrivals are here
        </h1>
        <p className="mt-4 text-xl text-white">
          The new arrivals have, well, newly arrived. Check out the latest
          options from our summer small-batch release while they're still in
          stock.
        </p>
        <Link
          href="/newArrivals"
          className="inline-block px-8 py-3 mt-8 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-100"
        >
          Shop New Arrivals
        </Link>
      </div>
    </>
  );
}
