import Home from '../components/Home';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Index() {
  return (
    <>
     <Head>
        <title>Vikas Portfolio</title>
        <meta
          name="title"
          property="og:title"
          content="Vikas Portfolio"
        />
        <meta property='og:type' content='website' />
        <meta
          name="description"
          property="og:description"
          content="Vikas Portfolio using Next.js"
        />
        <meta name="twitter:title" content="Vikas Portfolio" />
        <meta name="twitter:description" content="Vikas Portfolio using Next.js" />
      </Head>
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
