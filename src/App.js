import Navbar from './components/NavBar';
import Hero from './components/Hero.js';
import About from './components/About.jsx';
import Skills from './components/Skills.js';
import './App.css';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
   

  );
}

export default App;
