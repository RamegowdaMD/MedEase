import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/shop_context';
import Title from './Title'
import Product_item from './Product_item';
import { useState } from 'react';

const Daily_needed = () => {
    const {products}  = useContext(ShopContext);
    const [Daily_neededs , setDaily_neededs] = useState([]);
    useEffect(()=>
    {
        if (products && products.length > 0) {
            setDaily_neededs(products.slice(0, 15));
        }
    },[])

  return (
    <div className='my-10'>
        <div className="text-center py-8 text-3xl ">
            <Title text1={'Daily'} text2={'Needed'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, in!
            </p>
        </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-4 gap-y-6'>
        {
            Daily_neededs.map((item,index)=>(
            <Product_item key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
        ))
        }
      </div>
    </div>
  )
}

export default Daily_needed;
