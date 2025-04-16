import React from 'react'

const Footer = () => {
  return (
    <div className='mt-40'>
      <hr />
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-30 text-sm'>
      <div className="">
        <h1 className='mb-5 w-32 text-3xl font-serif'>QuickHealth</h1>
        <p className="w-full md:w-2/3 text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deleniti modi voluptatum ipsa quisquam iste aliquam dolor saepe molestias itaque!</p>
      </div>
      <div className="">
          <p className="text-xl font-medium mb-5 font-serif">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
      </div>
      <div >
        <p className="text-xl font-medium mb-5 font-serif ">GET IN TOUCH</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>+91-7483907232</li>
          <li>ramegowdadayananda@QuickHealth.com</li>
        </ul>
      </div>
      
    </div>
    <div className="">
    <hr className="" />
    <p className="py-5 text-sm text-center">CopyRight 2025 QuickHealth.com - All Rights Reserved</p>
  </div>
  </div>
  )
}

export default Footer
