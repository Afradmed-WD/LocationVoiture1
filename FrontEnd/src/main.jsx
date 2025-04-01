import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Section3 from './Pages/section3';
import Details from './Pages/Details';
import Favoris from './Pages/Favoris';
import Login from './Pages/Login';
import Register from './Pages/Register';
import FAQ from './Pages/FAQ';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Dacia from './Category/Dacia';
import Renault from './Category/Renault';
import Avis from './Pages/Avis';
import Reservation from './Pages/Reservation';

import ReservationForm from './Pages/Tester';
import CarRental from './Pages/Reservation';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Section3 />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/voiture/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/fqa" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/category/dacia" element={<Dacia />} />
        <Route path="/category/renault" element={<Renault />} />
        <Route path="/avis" element={<Avis />} />
        <Route path="/reserver" element={<CarRental />} />
        <Route path="/test" element={<ReservationForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
