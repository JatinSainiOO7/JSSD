import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// components are there_______
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Work from './components/work.jsx';
import About from './components/about.jsx'
import Friend from './components/friend.jsx';
import Footer from  './components/footer.jsx';

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Navbar />
    <Hero />
    <About />
    <Work />
    <Friend />
    <Footer />
  </StrictMode>,
)

var radioButton = document.querySelectorAll(".trcc-radio-project-filter");
radioButton.forEach(function (item) {
  item.addEventListener("click", function () {
    radioButton.forEach(function (item) {
      item.classList.remove("active");
    });
    item.classList.add("active");
    console.log(item);
  });
});