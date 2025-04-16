import React, { use, useContext } from 'react'
import {NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {assets} from '../assets/assets';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { ShopContext } from '../context/shop_context';

const NavHome = () => {

    const [visible , setVisible] = useState(false);
    const {setShowSearch , getCartCount,navigate , token , setToken , setCartItems} = useContext(ShopContext);

    const logout = ()=>
    {
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
        navigate('/login')
    }

  return (
    <div>
    <div className='navbar flex items-center justify-between  py-5 px-9'>
        <Link to="/" className="text-2xl text-gray-700 font-bold">
             QuickHealth
         </Link>
         <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className="flex  flex-col  items-center gap-1 text-gray">
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'></hr>
            </NavLink>
            <NavLink to='/about' className="flex  flex-col  items-center gap-1  text-gray ">
                <p>About</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'></hr>
            </NavLink>
            <NavLink to='/contact' className="flex  flex-col  items-center gap-1   text-gray ">
                <p>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'></hr>
            </NavLink>
            <NavLink to='/collection' className="flex  flex-col  items-center gap-1   text-gray ">
                <p>Medicine</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'></hr>
            </NavLink>
         </ul>
         <div className='flex  items-center gap-6'>
            <img src={assets.search} onClick={()=>setShowSearch(true)} className='w-5 cursor-pointer' alt=''/>
            <div className='group relative'>
                <Link to={'/Login'}><img src={assets.profile1} className='w-5 cursor-pointer' alt=''/></Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50'>
                    <div className="flex flex-col gap-2 w-36 px-5 bg-slate-100 text-gray-500 rounded ">
                        <p className="cursor-pointer hover:text-black">My Profile</p>
                        <p className="cursor-pointer hover:text-black">Orders</p>
                        <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <Link to='/cart' className="text-3xl cursor-pointer relative">
            <span>
              <FaShoppingCart className="cart h-5 w-8"/>
            </span>
            <div className="bg-red-500 text-white w-0 p-3 flex h-2 rounded-full  absolute -top-3 -right-3 justify-center items-center">
              <p className="text-xs">{getCartCount()}</p>
            </div>
            </Link>
            <img onClick={()=>setVisible(true)} src={assets.menu1} className='w-5 cursor-pointer sm:hidden' alt=''/>
            </div>
            {/*  sidebar menu small screen*/}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white z-50 transition-all ${visible?'w-full':'w-0'}`}>
                <div className="flex  flex-col text-gray-600 ">
                    <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                        <img className=" rotate-0 h-6" src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink className="py-2 pl-6 border " onClick={()=>setVisible(false)}  to='/'>Home</NavLink>
                    <NavLink className="py-2 pl-6 border " onClick={()=>setVisible(false)} to='/about'>About</NavLink>
                    <NavLink className="py-2 pl-6 border " onClick={()=>setVisible(false)} to='/contact'>Contact</NavLink>
                    <NavLink className="py-2 pl-6 border " onClick={()=>setVisible(false)} to='/collection'>Medicine</NavLink>
                </div>
            </div>
    </div>
    </div>
  )
}
export default NavHome

