import React from "react";

export default function Product({product}) {
  return (
    <div key={product.id} href={product.href} className="cursor-pointer group">
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
      <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
    </div>
  );
}
