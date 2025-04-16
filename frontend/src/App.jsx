import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Collection from './pages/Collection';
import Login from './pages/Login';
import Product from './pages/Product';
import PlaceOrder from './pages/PlaceOrder';
import Order from './pages/Orders';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Contact from './pages/Contact';
import NavHome from './components/NavHome';
// import Footer from './components/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer  from './components/Footer';
import Searchbar from './components/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer  />
      <NavHome/>
      <Searchbar/>
      <hr className='bg-gray-200 h-[1.5px] w-full border-none '></hr>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeOrder" element={<PlaceOrder />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
