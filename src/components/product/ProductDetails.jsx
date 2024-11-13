import React, { useContext, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { cartContext } from "../../context";

export default function ProductDetails() {
  const {handleAddToCart,handleAddToWishList, setTitle} = useContext(cartContext);
  const products = useLoaderData();
  const { id } = useParams();
  const product = products.find((pro) => pro.product_id === id);
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    Specification,
    availability,
    rating,
  } = product;
  useEffect(()=>{
    setTitle('Gadged Heaven | Product Details')
  },[])
  return (
    <div className="bg-seconderyBg pb-32">
      <div className="bg-primaryBg p-6 pb-52">
        <h2 className="font-bold text-3xl text-white text-center">
          Product Details
        </h2>
        <p className="text-white text-center">
          Elevate Your Lifestyle with Our Gadgets Transform Your Everyday
          Experience
        </p>
      </div>
      <div className="md:w-3/4 mx-auto -my-44 px-2">
        <div className="card lg:card-side bg-white shadow-md md:p-8 p-5 gap-4 rounded-2xl">
          <figure className="max-w-[500px] rounded-2xl">
            <img src={product_image} className="rounded-2xl" alt="Album" />
          </figure>
          <div className="p-2 space-y-4">
            <h2 className="card-title font-semibold text-3xl text-primaryText">
              {product_title}
            </h2>
            <p className="font-semibold text-lg text-primaryText/80">
              Price: $ {price}
            </p>
            <div
              className={`font-medium w-fit text-sm px-3 py-1 border rounded-full ${
                availability === true
                  ? "bg-[#309C08]/10 border-[#309C08] text-[#309C08]"
                  : "border-red-500 text-red-500 bg-red-100"
              }`}
            >
              {availability === true ? "In Stock" : "Out Of Stock"}
            </div>
            <p className="text-lg text-primaryText/60">{description}</p>
            <h2 className="font-bold text-lg text-primaryText">
              Specification
            </h2>
            <ol className="list-decimal ml-8 text-lg text-primaryText/60">
              {Specification.map((specs, idx) => (
                <li key={idx}>{specs}</li>
              ))}
            </ol>
            <div className="flex items-center gap-1 font-bold text-lg text-primaryText">Rating <ReactStars
              count={1}
              size={24}
              value={1}
              activeColor="#ffd700"
            /></div>
            <div className="flex gap-3 items-center">
            <ReactStars
              count={5}
              size={24}
              isHalf={true}
              value={rating}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <div className="py-1 px-2 bg-primaryText/5 rounded-full w-fit font-medium text-primaryText/80 text-sm">
              {rating}
            </div>
            </div>
            <div className="card-actions justify-start items-center gap-4">
              <button onClick={()=>handleAddToCart(product)} className="btn rounded-full bg-primaryBg text-white flex items-center justify-center gap-1 hover:bg-primaryBg/90">
                Add To Card
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
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </button>
              <button onClick={()=>handleAddToWishList(product)} className="h-12 w-12 rounded-full border bg-white flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
