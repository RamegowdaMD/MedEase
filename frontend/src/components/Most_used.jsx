import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/shop_context'
import { useState } from 'react';
import Title from './Title';
import Product_item from './Product_item';

const Most_used = () => {
    const {products} = useContext(ShopContext);
    const [MostUsed , setMostUsed] = useState([]);

    useEffect(()=>{
        const MostProduct = products.filter((item)=>(item.bestseller));
        setMostUsed(MostProduct.slice(0,5));
    },[products])

  return (
    <div className='my-10'>
        <div className="text-center  text-3xl py-8 ">
            <Title text1={'Most'} text2={'Used'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, in!
            </p>
        </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-4 gap-y-6'>
        {
            MostUsed.map((item,index)=>(
            <Product_item key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
        ))
        }
      </div>
    </div>
  )
}

export default Most_used
