import React, { useContext, useEffect, useState } from "react";
import Cart from '../../components/product/Cart'
import WishList from '../../components/product/WishList'
import { cartContext } from "../../context";
export default function Dashboard() {
  const {setTitle} = useContext(cartContext);
  useEffect(()=>{
    setTitle('Gadget Heaven | Dashboard')
  },[])
  const [isActiveList,setIsActiveList] = useState('Cart');
  const activeBtn = 'btn w-1/2 bg-white hover:bg-primaryBg hover:border hover:border-white hover:text-white text-primaryBg rounded-full text-lg font-extrabold';
  const inActiveBtn = 'btn w-1/2 hover:bg-white bg-primaryBg border border-white hover:text-primaryBg text-white rounded-full text-lg font-medium';
  return (
    <div>
      <div className="bg-primaryBg p-6 space-y-4">
        <h2 className="font-bold text-3xl text-white text-center">
          Dashboard
        </h2>
        <p className="text-white text-center">
        Experience the Future of Technology With Our Fast Home Delivery Service
        </p>
        <div className="md:w-1/4 mx-auto flex gap-2 pt-4">
          <button onClick={()=>setIsActiveList('Cart')} className={isActiveList==='Cart'?activeBtn:inActiveBtn}>Cart</button>
          <button onClick={()=>setIsActiveList('WishList')} className={isActiveList==='WishList'?activeBtn:inActiveBtn}>
              WishList
          </button>
        </div>
      </div>
      <div>
        {isActiveList==='Cart'?<Cart/>:<WishList/>}
      </div>
    </div>
  );
}
