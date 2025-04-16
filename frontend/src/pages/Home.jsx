import React from 'react'
import Hero from '../components/Hero';
import Carousels from '../components/Carousels';
import Daily_needed from '../components/Daily_needed';
import Most_used from '../components/Most_used';
import Our_policy from '../components/Our_policy';
import NewsLetterBox from '../components/NewsLetterBox';

const Home = () => {
  return (
    <div >
      <Carousels/>
      <Daily_needed/>
      <Most_used/>
      <Our_policy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home