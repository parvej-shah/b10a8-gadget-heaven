import React from 'react'

export default function ProductCategories({categories,searchProduct,activeCategory}) {
    const activeCategoryClass = 'font-extrabold text-white bg-primaryBg'
    const inActiveCategoryClass = 'font-medium text-primaryText/80 bg-primaryText/5'
  return (
    <div className="flex flex-col p-6 border bg-white rounded-2xl gap-4">
        {
            categories.map((category,idx)=><button key={idx} className={`btn rounded-full text-lg ${activeCategory===category?activeCategoryClass:inActiveCategoryClass}`} onClick={()=>searchProduct(category)}>{category}</button>)
        }
    </div>
  )
}
