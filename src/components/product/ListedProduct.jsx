import React from "react";

export default function ListedProduct({ product,handleRemoveCart }) {
  return (
    <div>
      <div className="card  gap-4 flex-col md:flex-row bg-white shadow-md p-8">
        <img src={product.product_image} alt="img" className="h-32 w-52 rounded-xl" />
        <div className="md:px-4 space-y-3 md:w-2/3">
          <h2 className="card-title font-semibold text-2xl text-primaryText">
            {product.product_title}
          </h2>
          <p className="text-lg text-primaryText/60">{product.description}</p>
          <p className="font-semibold text-xl text-primaryText/80">
            Price: ${product.price}
          </p>
        </div>
        <div className="md:w-1/4 flex justify-end items-start w-full">
          <button onClick={()=>handleRemoveCart(product)} className="h-9 w-9 border-red-500 border rounded-full text-red-500 flex items-center justify-center hover:bg-red-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
