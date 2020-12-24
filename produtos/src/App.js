import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Contact from './pages/Contact/Contact';
import ListProducts from './pages/ListProducts/ListProducts';
import Product from './pages/Product/Product';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />

        <div className="content">
          <Routes>
            <Route path="/" element={<ListProducts />} end />
            <Route path="product/:id" element={<Product />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
