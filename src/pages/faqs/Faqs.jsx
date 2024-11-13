import React, { useEffect, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Faq from "./Faq";
import { cartContext } from "../../context";

export default function Faqs() {
  const faqs = useLoaderData();
  const {setTitle } = useContext(cartContext);
  useEffect(()=>{
    setTitle('Gadged Heaven | FAQs')
  },[])
  return (
    <div>
      <div className="bg-primaryBg p-6 space-y-3">
        <h2 className="font-bold text-3xl text-white text-center">Frequently Asked Question</h2>
        <p className="text-white text-center">
        Find Quick Answers to Common Questions About Our Store
        </p>
      </div>
      <div className="container mx-auto px-2 my-6">
        <h2 className="font-bold text-2xl text-primaryText">FAQs</h2>
      </div>
      <div className="container mx-auto px-2 mb-20 mt-10 space-y-4">
        {faqs.map((faq) => (
          <Faq key={faq.id} faq={faq} />
        ))}
      </div>
    </div>
  );
}
