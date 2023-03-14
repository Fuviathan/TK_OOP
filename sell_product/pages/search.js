import React from "react";
import Header from "../components/HomePage/Header/Header";
import { SearchCircleIcon, ClockIcon } from "@heroicons/react/outline";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Artwork Tee",
    href: "#",
    price: "$32.00",
    color: "Mint",
    size: "Medium",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-03-product-04.jpg",
    imageAlt: "Front of mint cotton t-shirt with wavey lines pattern.",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    price: "$32.00",
    color: "Charcoal",
    leadTime: "7-8 years",
    size: "Large",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg",
    imageAlt: "Front of charcoal cotton t-shirt.",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    price: "$32.00",
    color: "Sienna",
    size: "Large",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg",
    imageAlt: "Front of sienna cotton t-shirt.",
  },
];

export default function search() {
  return (
    <>
      <Header />
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:px-0">
        <h1 className="text-3xl font-extrabold tracking-tight text-center text-gray-900 sm:text-4xl">
          Search
        </h1>
        <div className="relative shadow-sm">
          <input
            type="text"
            name="product name"
            placeholder="Product name"
            className="block w-full px-4 py-2 mt-4 border-2 rounded-full placeholder:italic placeholder:text-lg"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 cursor-pointer hover:opacity-80">
            <SearchCircleIcon className="w-7 h-7" />
          </div>
        </div>

        <div className="mt-8">
          <section>
            <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
              {products.map((product) => (
                <li key={product.id} className="flex py-6">
                  <div className="flex-shrink-0">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="object-cover object-center w-24 h-24 rounded-md sm:w-32 sm:h-32"
                    />
                  </div>

                  <div className="flex flex-col flex-1 ml-4 sm:ml-6">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-sm">
                          <a
                            href={product.href}
                            className="font-medium text-gray-700 hover:text-gray-800"
                          >
                            {product.name}
                          </a>
                        </h4>
                        <p className="ml-4 text-sm font-medium text-gray-900">
                          {product.price}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.size}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <div className="mt-10">
              <Link
                href=""
                type="submit"
                className="w-full px-4 py-3 text-base font-medium text-center text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                Load more
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
