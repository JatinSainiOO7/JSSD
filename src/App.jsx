import './index.css'
import { StrictMode } from 'react'
// components are there_______
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Work from './components/work.jsx';
import About from './components/about.jsx'
import Friend from './components/friend.jsx';
import Footer from  './components/footer.jsx';
// import Box from './p5/box.js';

const App = () => {
  return (
    <StrictMode>
      <div className='box_p5'>
      {/* <Box />  */}
      </div>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Friend />
      <Footer />
    </StrictMode>
  )
}

export default App;