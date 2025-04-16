import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/shop_context';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';


const Searchbar = () => {
    const {search , setSearch , showSearch , setShowSearch} =  useContext(ShopContext);
    const [visible ,setVisible] = useState(false);
    const location = useLocation();

    useEffect(()=>
    {
        if(location.pathname.includes('collection'))
        {
            setVisible(true);
        }
        else{
            setVisible(false);
        }

    },[location])

  return showSearch && visible?(
    <div className='bg-gray-50 border-t  border-b text-center'>

      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input type="text" className="flex-1 outline-none bg-inherit text-sm" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <img src={assets.search} alt="" className="w-4" />
      </div>
      <img src={assets.crossicon} alt="" className='inline cursor-pointer w-5' onClick={()=>setShowSearch(false)}/>
    </div>
  ): null
}

export default Searchbar
