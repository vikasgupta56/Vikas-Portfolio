import Home from '../components/Home';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <>
      <Home />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />   
    </>
  )
}
