import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// components are there_______
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Work from './components/work.jsx';
import Friend from './components/friend.jsx';
import Footer from  './components/footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Work />
    <Friend />
    <Footer />
  </StrictMode>,
)
