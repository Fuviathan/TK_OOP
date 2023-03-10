import React from "react";

const products2 = [
  {
    id: 1,
    name: "Electric Kettle",
    href: "#",
    price: "$149",
    description: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-07.jpg",
    imageAlt:
      "Close up of long kettle spout pouring boiling water into pour-over coffee mug with frothy coffee.",
  },
  {
    id: 2,
    name: "Leather Workspace Pad",
    href: "#",
    price: "$165",
    description: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-08.jpg",
    imageAlt:
      "Extra large black leather workspace pad on desk with computer, wooden shelf, desk organizer, and computer peripherals.",
  },
  {
    id: 3,
    name: "Leather Long Wallet",
    href: "#",
    price: "$118",
    description: "Natural",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-09.jpg",
    imageAlt:
      "Leather long wallet held open with hand-stitched card dividers, full-length bill pocket, and simple tab closure.",
  },
  // More products...
];

export default function ProductGrid2() {
  return (
    <section aria-labelledby="more-products-heading" className="pb-24 mt-16">
      <h2 id="more-products-heading" className="sr-only">
        More products
      </h2>

      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
        {products2.map((product) => (
          <a key={product.id} href={product.href} className="group">
            <div className="w-full overflow-hidden rounded-lg aspect-w-1 aspect-h-1 sm:aspect-w-2 sm:aspect-h-3">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="object-cover object-center w-full h-full group-hover:opacity-75"
              />
            </div>
            <div className="flex items-center justify-between mt-4 text-base font-medium text-gray-900">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
            <p className="mt-1 text-sm italic text-gray-500">
              {product.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
