import React from 'react'
import NavBar from './navBar'
import MainLanding from './mainLanding'
import MiddleLanding from './middleLanding'
import CenterPic from './centerPic'
import Blue from './blue';
import Food from './food';
import Footer from './footer';
import Review from './review'

export default function mainDemo() {
  return (
    <>
    <div style={{backgroundColor:'#f8f9fc',height:'100vh'}}>
    <NavBar/>
    <MainLanding/>
    <MiddleLanding/>
    <div style={{marginTop:'5%'}}>
      <CenterPic/>
    </div>
    <div style={{marginTop:'5%'}}>
      <Blue/>
    </div>
    <div>
      <Food/>
    </div>
    <div>
      <Review/>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
    </>
  )
}
