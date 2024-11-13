import React from "react";
import bannerImg from "../../assets/bannerImg.png";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <div className="bg-white md:px-5 rounded-b-xl">
      <div className="hero bg-primaryBg rounded-b-xl text-white pb-28 md:pb-72">
        <div className="hero-content text-center z-10 container mx-auto">
          <div className="max-w-6xl">
            <h1 className="text-4xl md:text-6xl font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6 max-w-3xl mx-auto font-normal text-sm md:text-base">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <Link to={'/dashboard'}><button className="btn bg-white text-primaryBg font-bold text-xl rounded-full ">
              Shop Now
            </button></Link>
          </div>
        </div>
      </div>
      <div className="p-3 md:p-6 w-3/4 mx-auto rounded-3xl border-2 -mt-24 md:-mt-60 bg-white/20  bg-opacity-10  border-white">
        <img
          src={bannerImg}
          alt="bannerImg"
          className="rounded-3xl w-full h-full"
        />
      </div>
    </div>
  );
}
