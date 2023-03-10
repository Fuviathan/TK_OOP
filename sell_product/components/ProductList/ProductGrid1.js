import { useState } from "react";
import ModalProduct from "./ModalProduct";
const products1 = [
  {
    id: 1,
    name: "Focus Paper Refill",
    href: "#",
    price: "$13",
    description: "3 sizes available",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    name: "Focus Card Holder",
    href: "#",
    price: "$64",
    description: "Walnut",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg",
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },
  {
    id: 3,
    name: "Focus Carry Pouch",
    href: "#",
    price: "$32",
    description: "Heather Gray",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },

  // More products...
];

export default function ProductGrid1() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section className="mt-8" onClick={() => setShowModal(true)}>
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {products1.map((product) => (
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
      <ModalProduct onClose={() => setShowModal(false)} isVisible={showModal} />
    </>
  );
}
