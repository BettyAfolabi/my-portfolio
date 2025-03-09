import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import { motion } from "framer-motion";

import GithubGraph from '../sections/GithubGraph'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Footer from '../sections/Footer'
import Hero from "../sections/Hero";
import BackToTop from "../components/BackToTop";


const Home = () => {
    const scrollContainer = useRef(null);

  useEffect(() => {
    const scrollbar = Scrollbar.init(scrollContainer.current, {
      damping: 0.1,
      thumbMinSize: 20,
    });
    return () => {

      scrollbar.destroy();
    };
  }, []);

  return (    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      ref={scrollContainer}
      className="bg-[#0f1616] font-roboto"
    >
        <Hero />
        <div className="gradient"></div>
        <GithubGraph />
        <div className="gradient"></div>
        <About />
        <div className="gradient"></div>
        <Projects />
        <div className="gradient"></div>
        <Footer />
        <BackToTop />
    </motion.div>   
  )
}

export default Home
