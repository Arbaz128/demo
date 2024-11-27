import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainDemo from './mainDemo';
import NavBar from './navBar'; 
import MainLanding from './mainLanding'
import MiddleLanding from './middleLanding'
import Food from './food';
import Review from './review'
import Footer from './footer';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainDemo />} /> {/* Pass JSX element */}
        <Route path='/navBar' element={<NavBar />} /> {/* Pass JSX element */}
        <Route path='/mainLanding' element={<MainLanding/>} /> {/* Pass JSX element */}
        <Route path='/middleLanding' element={<MiddleLanding/>} /> {/* Pass JSX element */}
        <Route path='/Food' element={<Food/>} /> {/* Pass JSX element */}
        <Route path='/Review' element={<Review/>} /> {/* Pass JSX element */}
        <Route path='/Footer' element={<Footer/>} /> {/* Pass JSX element */}
      </Routes>
    </BrowserRouter>
  );
}
