import { useState } from "react";
import Header from "../components/HomePage/Header/Header";
import ModalProduct from "../components/ProductList/ModalProduct";
import Product from "../components/ProductList/Product";
import Overview from "../components/ProductList/Overview";
import Collection from "../components/ProductList/Collection";
import ProductGrid2 from "../components/ProductList/ProductGrid2";
import { For } from "react-haiku";

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

export default function women() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="relative z-10">
        <ModalProduct
          onClose={() => setShowModal(false)}
          isVisible={showModal}
        />
        <Header />
        <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
          <Overview />
          <div className="mt-8">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              <For
                each={products1}
                render={(product, index) => (
                  <div onClick={() => setShowModal(true)}>
                    <Product product={product} />
                  </div>
                )}
              />
            </div>
          </div>
          <Collection />
          <ProductGrid2 />
        </div>
      </div>
    </>
  );
}
