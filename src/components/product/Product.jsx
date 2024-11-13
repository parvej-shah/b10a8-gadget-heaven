import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div className="card bg-white border shadow-md rounded-lg p-5 h-full relative">
      <img
        src={product.product_image}
        alt="Shoes"
        className="h-44 rounded-xl mb-4"
      />
      <div className="p-1 space-y-3 h-full pb-16">
        <h2 className="card-title font-semibold text-primaryText text-2xl">
          {product.product_title}
        </h2>
        <p className="text-primaryText/60 font-medium text-xl">
          Price: $ {product.price}
        </p>
        <div className="absolute bottom-5">
        <Link className="" to={`/product/${product.product_id}`}>
          <button className="btn rounded-full bg-white border-[1.5px] border-t-primaryBg border-b-pink-500 border-x-primaryBg text-primaryBg text-lg font-semibold hover:bg-primaryBg hover:text-white">
            View Details
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}
