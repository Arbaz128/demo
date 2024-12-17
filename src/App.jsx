import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainDemo from './mainDemo';
import NavBar from './navBar'; 
import MainLanding from './mainLanding'
import MiddleLanding from './middleLanding'
import Food from './food';
import Review from './review'
import Footer from './footer';
import LhsLanding from './lhsLanding';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainDemo />} /> 
        <Route path='/navBar' element={<NavBar />} />
        <Route path='/mainLanding' element={<MainLanding/>} />
        <Route path='/middleLanding' element={<MiddleLanding/>} />
        <Route path='/lhsLanding' element={<LhsLanding/>} />
        <Route path='/Food' element={<Food/>} />
        <Route path='/Review' element={<Review/>} /> 
        <Route path='/Footer' element={<Footer/>} /> 
      </Routes>
    </BrowserRouter>
  );
}
