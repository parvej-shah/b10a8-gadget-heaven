import React, { useContext, useEffect, useState } from 'react'
import Banner from '../../components/banner/Banner'
import Products from '../../components/product/Products'
import { useLoaderData } from 'react-router-dom'
import ProductCategories from '../../components/product/ProductCategories';
import { cartContext } from '../../context';

export default function Home() {
    const {setTitle} = useContext(cartContext);
    const allProducts = useLoaderData();
    const[ categories,setCategories] = useState([]);
    const[ searchedProducts,setSearchedProducts] = useState([]);
    const[ activeCategory,setactiveCategory] = useState('All Products');
    useEffect(()=>{
        const getCategories = allProducts.map(product=> product.category);
        setCategories(['All Products',...new Set(getCategories),'Mouse']);
        setSearchedProducts(allProducts);
        setactiveCategory('All Products');
        setTitle('Gadget Heaven | Gadgets');
    },[])
    const searchProduct = (category)=>{
        if(category==='All Products'){
            setactiveCategory('All Products');
            setSearchedProducts(allProducts);
        }
        else{
            const products = allProducts.filter(product=>product.category===category);
            setactiveCategory(category);
            setSearchedProducts(products);
        }
    }
  return (
    <div className='bg-seconderyBg'>
        <Banner/>
        <h2 className='text-primaryText font-bold text-4xl text-center mt-10'>Explore Cutting-Edge Gadgets</h2>
        <section className='flex flex-col px-2 md:flex-row gap-4 container mx-auto mt-10'>
            <aside className='md:w-1/4'>
             <ProductCategories activeCategory={activeCategory} searchProduct={searchProduct} categories={categories}/>
            </aside>
            <section className='md:w-3/4'>
             {searchedProducts.length>0?<Products products={searchedProducts}/>:<h2 className='text-2xl text-primaryBg font-bold md:m-5'>Products Not Available</h2>}
            </section>
        </section>
    </div>
  )
}
