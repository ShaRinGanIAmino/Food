import React from 'react';
import { Navbar, Footer } from './components';
import { ToastContainer, toast } from 'react-toastify';
import {
  Coffee_shop,
  Restaurants,
  Sign_in,
  Log_in,
  Home,
  Contact_us,
} from './pages';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
const App = () => {
  return (
    <div className="flex-col  w-screen h-screen ">
      <ToastContainer />
      <BrowserRouter>
        <div className="h-[6%] flex items-center border-b-2 border-line bg-secondary">
          <Navbar />
        </div>

        <div className="h-[88%] bg-secondary">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Restaurants" element={<Restaurants />} />
            <Route path="/Coffee_shop" element={<Coffee_shop />} />
            <Route path="/Sign_in" element={<Sign_in />} />
            <Route path="/Log_in" element={<Log_in />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Contact_us" element={<Contact_us />} />
            <Route path="/*" element={<h>ERROR 404</h>} />
          </Routes>
        </div>
        <div className="h-[6%] flex items-center border-t-2 border-line bg-secondary">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
