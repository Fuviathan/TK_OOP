import React from "react";
import Header from "../components/HomePage/Header/Header";
import { CheckIcon, ClockIcon } from "@heroicons/react/solid";
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

export default function shoppingcart() {
  return (
    <>
      <Header />
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:px-0">
        <h1 className="text-3xl font-extrabold tracking-tight text-center text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>

        <form className="mt-12">
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul
              role="list"
              className="border-t border-b border-gray-200 divide-y divide-gray-200"
            >
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

                    <div className="flex items-end justify-between flex-1 mt-4">
                      <div></div>
                      <div className="ml-4">
                        <button
                          type="button"
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section aria-labelledby="summary-heading" className="mt-10">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>

            <div>
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">Total</dt>
                  <dd className="ml-4 text-base font-medium text-gray-900">
                    $96.00
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10">
              <Link
                href='/donePurchase'
                type="submit"
                className="w-full px-4 py-3 text-base font-medium text-center text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                Checkout
              </Link>
            </div>
          </section>
        </form>
      </div>
    </>
  );
}
