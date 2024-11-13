import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context";
import ListedProduct from "./ListedProduct";
import modalImg from "../../assets/Group.png";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  let { carts, handleRemoveCart, sortCart, setCarts } = useContext(cartContext);
  const [sortedCart, setSortedCart] = useState(carts);
  const [modalOpen, setModalOpen] = useState(false);
  const [btnDisable, setBtnDisable] = useState(true);
  const navigate = useNavigate();
  const totalSum = carts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  useEffect(() => {
    setSortedCart(carts);
    if(totalSum>0){
        setBtnDisable(false);
    }
  }, [carts,totalSum]);
  const handlePurchase = () => {
    setModalOpen(true);
  };
  const handleRedirect = () => {
    setCarts([]);
    setBtnDisable(true);
    setModalOpen(false);
    navigate('/')
  };
  return (
    <div className="bg-seconderyBg pt-10">
      <section className="container mx-auto px-2">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="font-bold text-2xl text-primaryText">Cart</h1>
          <div className="flex gap-4 items-center justify-center flex-col md:flex-row">
            <h2 className="font-bold text-2xl text-primaryText">
              Total Cost: {totalSum.toFixed(2)}
            </h2>
            <button
              onClick={sortCart}
              className="btn rounded-full bg-white border-[1.5px] border-t-primaryBg border-b-pink-500 border-x-primaryBg text-primaryBg text-lg font-semibold hover:bg-primaryBg hover:text-white flex w-fit justify-center items-center"
            >
              Sort By Price
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
                  d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                />
              </svg>
            </button>
            <button
              onClick={handlePurchase} disabled={btnDisable}
              className={`btn rounded-full bg-gradient-to-tr border-[1.5px] to-primaryBg from-pink-400  text-white text-lg font-semibold hover:bg-primaryBg}`}
            >
              Purchase
            </button>
            <div>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <dialog
                id="my_modal_1"
                className={`modal ${modalOpen ? "modal-open" : ""}`}
              >
                <div className="modal-box flex flex-col text-center items-center p-8">
                  <img src={modalImg} alt="" className="mb-4 h-fit w-fit"/>
                  <h3 className="font-bold text-primaryText text-2xl">Payment Successfull</h3>
                  <div className="divider"></div>
                  <p className="font-medium text-primaryText/60">Thanks for Purchasing.</p>
                  <p className="font-medium text-primaryText/60">Total: ${totalSum.toFixed(2)}</p>
                  <div className="modal-action w-full">
                    <button
                      onClick={handleRedirect}
                      className="btn bg-primaryText/10 text-primaryText font-semibold rounded-full w-full"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
        <div className="space-y-8 mt-10">
          {sortedCart.map((product) => (
            <ListedProduct
              key={product.product_id}
              handleRemoveCart={handleRemoveCart}
              product={product}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
