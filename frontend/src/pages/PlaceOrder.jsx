import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/shop_context'
import axios from 'axios'
import { toast } from 'react-toastify';



const PlaceOrder = () => {

  const [method , setMethod] = useState('cod');
  

  const {navigate , backendUrl , token , cartItems,setCartItems,getCartAmount , delivery_fee , products} = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: ''
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(data =>({...data, [name]: value}));


  }

const onSubmitHandler = async (event) => {
  event.preventDefault();

  try{
    let orderItems = []
    for(const items in cartItems)
    {
      for(const item in cartItems[items])
      {
        if(cartItems[items][item]>0)
        {
          const itemInfo = structuredClone(products.find(product=>product._id === items))
          if(itemInfo)
          {
            itemInfo.size   = item;
            itemInfo.quantity = cartItems[items][item];
            orderItems.push(itemInfo)
          }

        }
      }
    }

    let orderData = {
      address : formData,
      items:orderItems,
      amount : getCartAmount()+delivery_fee
    }

    switch(method)
    {
      case 'cod' :
        const response = await axios.post(`${backendUrl}/api/order/place`, orderData, {headers:{token}})
        if(response.data.success)
          {
            setCartItems({})
            navigate('/order')
          }
          else{
            toast.error(response.data.message)
          }
        break;
      case 'stripe':
        toast.info('Stripe payment integration coming soon!');
        break;
      case 'razorpay':
        toast.info('Razorpay payment integration coming soon!');
        break;
      default:
        toast.error('Invalid payment method selected');
        break;
    }

  }catch(error)
  {
    console.log(error);
    toast.error(error.message)
  }

}


  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* left side */}
      <div className="flex flex-col w-full gap-4 sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='First Name' />
          <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='Last Name' />
        </div>
        <input required onChange={onChangeHandler}  name='email' value={formData.email} type="email" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='email address'/>
        <input required onChange={onChangeHandler} name='street' value={formData.street} type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='Street' />
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler}  name='city' value={formData.city} type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='City' />
          <input required onChange={onChangeHandler} name='state' value={formData.state} type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='zipCode' value={formData.zipCode} type="Number" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='Zip Code' />
          <input required onChange={onChangeHandler} name='country' value={formData.country} type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='Country' />
        </div>
          <input required onChange={onChangeHandler} name='phone' value={formData.phone} type="Number" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='Phone' />
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
            <button type='submit' className="bg-black text-white px-16 py-3 text-sm">Place Order</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
