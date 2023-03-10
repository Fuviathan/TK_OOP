import React from "react";

export default function Collection() {
  return (
    <section
      aria-labelledby="featured-heading"
      className="relative mt-16 overflow-hidden rounded-lg lg:h-96"
    >
      <div className="absolute inset-0">
        <img
          src="https://tailwindui.com/img/ecommerce-images/category-page-01-featured-collection.jpg"
          alt=""
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 bg-black bg-opacity-75 rounded-bl-lg rounded-br-lg backdrop-filter backdrop-blur sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:rounded-tl-lg lg:rounded-br-none lg:flex-col lg:items-start">
        <div>
          <h2 id="featured-heading" className="text-xl font-bold text-white">
            Workspace Collection
          </h2>
          <p className="mt-1 text-sm text-gray-300">
            Upgrade your desk with objects that keep you organized and
            clear-minded.
          </p>
        </div>
        <a
          href="#"
          className="flex items-center justify-center flex-shrink-0 px-4 py-3 mt-6 text-base font-medium text-white bg-white bg-opacity-0 border border-white border-opacity-25 rounded-md hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full"
        >
          View the collection
        </a>
      </div>
    </section>
  );
}
