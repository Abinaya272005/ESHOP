import React ,{useEffect}from 'react';
import './index.css';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Product from './Products';
import RecentNews from './RecentNews';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './footer';
import Offer from './Offer';
import Company from './Company';


function App() {
  useEffect(()=>{
    AOS.init({duration:1000});
  },[])
  return(
    <div data-aos="fade-up">
    
    <Navbar/>
    <Hero/>
    <Features/>
    <Offer/>
    <Product/>
    <RecentNews/>
    <Company/>
    <Footer/>    
    </div>
  )
}

export default App;
