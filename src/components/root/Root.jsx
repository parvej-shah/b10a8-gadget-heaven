import React, { useState } from "react";
import NavBar from "../navbar/NavBar";
import { Outlet } from "react-router-dom";
import { cartContext } from "../../context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet, HelmetProvider } from "react-helmet-async"
import Footer from "../footer/Footer";
export default function Root() {
  const [carts, setCarts] = useState([]);
  const [wishLists, setWishLists] = useState([]);
  const [title, setTitle] = useState('Gadget Heaven | Gadgets');
  const handleAddToCart = (product)=>{
    const productFind = carts.find(item=>item.product_id === product.product_id);
    if(productFind){
      toast.warning(`${product.product_title} already in Cart`);
    }
    else{
      setCarts([...carts,product]);
      toast.success(`${product.product_title} added to Cart`);
    }
  }
  const handleAddToWishList = (product)=>{
    const productFind = wishLists.find(item=>item.product_id === product.product_id);
    if(productFind){
      toast.warning(`${product.product_title} already in wishList`);
    }
    else{
      setWishLists([...wishLists,product]);
      toast.success(`${product.product_title} added to wishList`);
    }
  }
  const handleRemoveWishList = (product)=>{
    const newList = wishLists.filter(item=>item.product_id != product.product_id);
    setWishLists(newList);
    toast.error(`${product.product_title} removed from wishList`);
  }
  const handleRemoveCart = (product)=>{
    const newList = carts.filter(item=>item.product_id != product.product_id);
    setCarts(newList);
    toast.error(`${product.product_title} removed from Cart`);
  }
  const sortCart = () => {
    const sortedArray = [...carts].sort((a, b) => b.price - a.price);
    setCarts(sortedArray);
  };
  return (
    <cartContext.Provider value={{carts,handleAddToCart,wishLists,handleAddToWishList,setWishLists,setCarts,handleRemoveWishList,handleRemoveCart,sortCart,setTitle}}>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      <div>
      <div>
        <NavBar />
      </div>
      <Outlet />
      <ToastContainer/>
      <Footer/>
    </div>
      </HelmetProvider>
    </cartContext.Provider>
  );
}
