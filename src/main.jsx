import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// components are there_______
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import About from './components/about.jsx';
import Friend from './components/friend.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <About />
    <Friend />
  </StrictMode>,
)
