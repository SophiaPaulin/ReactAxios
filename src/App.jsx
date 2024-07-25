import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Edit from './components/Edit';
import Create from './components/Create';
import Footer from './components/Footer';


const App = () => {
  const[id,setId]=useState(0)
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products setId={setId} />} />
          <Route path="/edit/:id" element={<Edit id={id} />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    <Footer />
    </div>
  );
};

export default App;