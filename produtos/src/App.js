import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ListProducts from './pages/ListProducts/ListProducts';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div id="container">
      <BrowserRouter>
        <Header />

        <div className="content">
          <Routes>
            <Route path="/" element={<ListProducts />} end />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
