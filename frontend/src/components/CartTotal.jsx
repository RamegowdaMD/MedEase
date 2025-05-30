import React, { useContext } from 'react'
import { ShopContext } from '../context/shop_context'
import Title from './Title';


const CartTotal = () => {
  
  const {currency , delivery_fee , getCartAmount} = useContext(ShopContext)

  return (
    <div className='w-full'>

      <div className="text-2xl ">
        <Title text1={'Cart'} text2={'Total'}/>
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm ">
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency}{getCartAmount()}.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p className="">Shipping</p>
          <p className="">{currency}{delivery_fee}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <b>TOTAL</b>
          <b className="">{currency}{getCartAmount === 0? 0:getCartAmount()+delivery_fee}.00</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
