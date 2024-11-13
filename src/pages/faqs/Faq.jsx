import React from "react";

export default function Faq({ faq }) {
  return (
    <>
      <div className="collapse collapse-arrow bg-primaryBg/10 md:w-3/4 mx-auto">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium text-primaryText">
          {faq.question}
        </div>
        <div className="collapse-content">
          <p>{faq.answer}</p>
        </div>
      </div>
    </>
  );
}
