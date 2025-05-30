import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/shop_context'
import Title from '../components/Title';
import {useState} from 'react'
import axios from 'axios'

const Orders = () => {
  const { backendUrl, token, currency , userId} = useContext(ShopContext);
  const [orderData , setOrderData] = useState([]);


  const loadOrderData = async ()=>
    {
      try {
        if(!token)
        {
          return null;
        }
        const response = await axios.post(`${backendUrl}/api/order/userorders`,{},{headers:{token}})
        if(response.data.success)
        {
          let allOrdersItem = []
          response.data.orders.map((order)=>
          {
            order.items.map((item)=>
            {
              item['status'] = order.status
              item['date'] = order.date 
              item['payment'] = order.payment
              item['paymentMethod'] = order.paymentMethod
              allOrdersItem.push(item)
            })
          })
          setOrderData(allOrdersItem.reverse())
        }
      } catch (error) {
      }
    } 

    useEffect(()=>
    {
      loadOrderData();
    },[token])

  return (
    <div className='border-t pt-16'>
      <div className="text-2xl">
        <Title text1={'My'} text2={'ORDERS'}/>
      </div>
      <div>
        {
          orderData.map((item , index)=>(
            <div key={index} className='py-4 border-t border-b md:items-center text-gray-700 flex flex-col md:flex-row md:justify-between gap-4'>
                <div className='flex items-start gap-6 text-sm'>
                  <img src={item.image[0]} className='w-16 sm:w-20' alt="" />
                  <div>
                    <p className='sm:text-base font-medium'>{item.name}</p>
                    <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                        <p className='text-lg'>{currency}{item.price}</p>
                        <p>Quantity:{item.quantity}</p>
                    </div>
                    <p className='mt-2'>Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                    <p className='mt-2'>Payment: <span className='text-gray-400'>{item.paymentMethod}</span></p>
                  </div>
                </div>
                <div className='md:w-1/2 justify-between flex'>
                  <div className="flex items-center gap-2">
                    <p className='min-w-2 h-2 rounded-full bg-green-500'>

                    </p>
                    <p className='text-sm md:text-base'>{item.status}</p>
                  </div>
                  <div className='flex gap-2'>
                  <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Cancel Order</button>
                  <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
                  </div>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
