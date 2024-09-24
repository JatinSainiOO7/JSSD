import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HashRouter } from 'react-router-dom'
// components are there_______
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Work from './components/work.jsx';
import About from './components/about.jsx'
import Friend from './components/friend.jsx';
import Footer from  './components/footer.jsx';

createRoot(document.getElementById('root')).render(
  <HashRouter>
     <StrictMode>
    <Navbar />
    <Hero />
    <About />
    <Work />
    <Friend />
    <Footer />
  </StrictMode>
  </HashRouter>,
)
