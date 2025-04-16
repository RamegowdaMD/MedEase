import React from 'react'
import { assets } from '../assets/assets'

const Our_policy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div className="">
        <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5" />
        <p className='font-semibold'> Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free excahnge policy</p>

      </div>
      <div className="">
        <img src={assets.returns} alt="" className="w-12 m-auto mb-5" />
        <p className='font-semibold'> 3 days return policy</p>
        <p className="text-gray-400">We provide return excahnge policy</p>
      </div>
      <div className="">
        <img src={assets.support} alt="" className="w-12 m-auto mb-5" />
        <p className='font-semibold'> Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free excahnge policy</p>
      </div>
    </div>
  )
}

export default Our_policy
