import React, { useContext } from 'react'
import { ShopContext } from '../context/shop_context'
import {Link} from 'react-router-dom';

const Product_item = ({id,image,name , price}) => {
    const {currency} = useContext(ShopContext);
  return (
    <div>
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
            <div className='overflow-hidden'>
                <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className="text-sm font-medium">{currency}{price}</p>
        </Link>
    </div>
  )
}
export default Product_item
