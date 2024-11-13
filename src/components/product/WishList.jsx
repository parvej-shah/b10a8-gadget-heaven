import ListedWish from './ListedWish'
import { cartContext } from "../../context";
import React, { useContext } from "react";
export default function WishList() {
  const { wishLists,handleAddToCart, handleRemoveWishList} = useContext(cartContext);
  const handleCartSuffle = (product )=>{
      handleAddToCart(product);
      handleRemoveWishList(product);
  }
  return (
    <div className="bg-seconderyBg pt-10">
      <section className="container mx-auto px-2">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="font-bold text-2xl text-primaryText">WishList</h1>
        </div>
        <div className="space-y-8 mt-10">
          {wishLists.map(product=><ListedWish key={product.product_id} handleRemoveWishList={handleRemoveWishList} handleCartSuffle={handleCartSuffle} product={product}/>)}
        </div>
      </section>
    </div>
  )
}
