import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/shop_context'


const PlaceOrder = () => {

  const [method , setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);



  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* left side */}
      <div className="flex flex-col w-full gap-4 sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
          <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='First Name' />
          <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='Last Name' />
        </div>
        <input type="email" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='email address'/>
        <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='Street' />
        <div className='flex gap-3'>
          <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='City' />
          <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input type="Number" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='Zip Code' />
          <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='Country' />
        </div>
          <input type="Number" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='Phone' />
      </div>
      {/* ---- right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal/>
        </div>
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          {/* text payment method */}
          <div  className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center p-2 border px-3 gap-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method=== 'stripe'? 'bg-green-400 ' : '' }`}></p>
              <img src={assets.stripepay} alt="" className='h-5 mx-4' />
            </div>  
            <div onClick={()=>setMethod('razorpay')} className='flex items-center p-2 border px-3 gap-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method=== 'razorpay'? 'bg-green-400 ' : '' }`}></p>
              <img src={assets.razorpay} alt="" className='h-5 mx-4' />
            </div> 
            <div onClick={()=>setMethod('cod')} className='flex items-center p-2 border px-3 gap-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method=== 'cod'? 'bg-green-400 ' : '' }`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>Cash On Delivery</p>
            </div> 
          </div> 
          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/order')} className="bg-black text-white px-16 py-3 text-sm" type=''>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
