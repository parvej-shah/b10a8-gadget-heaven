import React from 'react'
import Product from './Product'

export default function Products({products}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
            products.map(product=><Product key={product.product_id} product={product}/>)
        }
    </div>
  )
}
