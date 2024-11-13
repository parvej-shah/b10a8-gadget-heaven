import React from "react";

export default function () {
  return (
    <div className="bg-white mt-24 shadow-2xl py-10 px-2">
        <div className="text-center space-y-2">
            <h2 className="font-bold text-primaryText text-3xl">Gadget Heaven</h2>
            <p>Leading the way in cutting-edge technology and innovation</p>
        </div>
        <div className="divider container mx-auto"></div>
      <footer className="footer container mx-auto text-primaryText/70  p-10">
        <nav>
          <h6 className="font-bold text-lg text-primaryText">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="font-bold text-lg text-primaryText">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="font-bold text-lg text-primaryText">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
}
