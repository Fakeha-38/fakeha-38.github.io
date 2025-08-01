import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className=" text-white">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
