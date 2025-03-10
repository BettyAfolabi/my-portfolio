import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import '../App.css'
import Navigation from '../components/Navbar'

export default function Hero() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  
  return (
    <>
     <Navigation />
    
      <section className="name py-20 mt-20 lg:mb-20 md:mx-12 lg:mx-32 px-8 md:px-32">
        <div className="namee-view">
          <h3 className="text-green">Elizabeth</h3>
          <h1 className="text-green"><span className="hidden lg:block">-</span>Afolabi</h1>
        </div>
        <div className="aesthetics text-green">
          <i className='bx bxs-component bx-spin'></i>
          <i className='bx bxs-component bx-spin'></i>
        </div>
      </section>
     
      <div className="intro md:pb-20 px-8 lg:px-20">
        <div className="about-text">
          <p>{`Hi! I'm Elizabeth aka Betty. I'm a Frontend Developer who specialise in creating user-friendly and responsive websites. I add a refined touch to each project.`}</p>
          <div className='my-3 bg-[#45a29e] p-3 font-bold text-white hover:bg-[#45a29e]/80 rounded-2xl w-fit'><Link to="/#about">More About Me</Link></div>
        </div>
        <div className="connect">
          <p><a href="mailto:betty4web@gmail.com">betty4web@gmail.com</a></p>

          <ul>
            <li>
              <a href="https://linkedin.com/in/elizabeth-afolabi-2a6511196"><i className="fa-brands fa-linkedin" aria-hidden ="true"></i> <span className="sr-only">LinkedIn</span></a>
            </li>
            <li>
              <a href="https://github.com/BettyAfolabi"><i className="fa-brands fa-github" aria-hidden="true"></i> <span className="sr-only">Github</span></a>
            </li>
            <li>
            <a href="https://github.com/BettyAfolabi"><i className="fa-brands fa-twitter" aria-hidden="true"></i> <span className="sr-only">X</span></a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
