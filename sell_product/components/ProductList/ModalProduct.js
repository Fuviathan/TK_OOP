import { useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import img from "../Img/FocusPaperRefil.png"
import Image from 'next/image'

const product = {
  name: "Focus Paper Refil",
  price: "$13",
  href: "#",
  description:
    "The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.",
  imageSrc:
    img,
  imageAlt: "Back angled view with bag open and handles to the side.",
};


console.log(img)

export default function ModalProduct({isVisible, onClose}) {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center w-screen h-screen bg-gray-700 bg-opacity-70">
      <div className="flex w-full text-base text-left transition transform md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
        <div className="relative flex items-center w-full px-4 pb-8 overflow-hidden bg-white shadow-2xl pt-14 sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          <button
            type="button"
            className="absolute text-gray-400 top-4 right-4 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
            onClick={() => onClose()}
          >
            <XIcon className="w-6 h-6" aria-hidden="true" />
          </button>

          <div className="grid items-start w-full grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
            <div className="sm:col-span-4 lg:col-span-5">
              <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1">
                <Image
                  src={img}
                  alt={product.imageAlt}
                  width={0}
                  height={0}
                  className="object-cover object-center border shadow-sm"
                />
              </div>
            </div>
            <div className="col-span-7">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">
                {product.name}
              </h2>

              <section className="mt-3">
                <h3>Product information</h3>
                <p className="text-2xl text-gray-900">{product.price}</p>
                <div className="mt-6">
                  <p className="text-sm text-gray-700">{product.description}</p>
                </div>
              </section>

              <section className="mt-6">
                <div className="mt-6">
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                    onClick={() => onClose()}
                  >
                    Add to cart
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
