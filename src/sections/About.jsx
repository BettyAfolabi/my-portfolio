import React from 'react'
import AboutTabs from '../components/aboutTabs/index'
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function About() {
  return (
    <section className='flex flex-col md:flex-row justify-between px-8 lg:px-20 py-30 bg-[#101b1b]' id='about'>
      <div className='basis-full lg:basis-1/2 py-6 lg:py-12'>
        <h2 className='text-[#45a29e]/80 font-bold text-lg'>Introduction</h2>
        <h1 className='font-bold text-3xl py-3 text-white mb-5'>Get To Know Me</h1>
        <div className="introduction py-6">
          <p className='text-sm leading-7'>Hi there 🙋🏾‍♀️! My name is Elizabeth Afolabi aka Betty. I'm a Frontend Developer dedicated to crafting visually appealing, user-focused web experiences. My journey began with a strong foundation in web development, which I’ve continuously refined through hands-on projects and immersive learning experiences and I also enjoy collaborating to bring creative visions to life.
          </p>
          <p className='text-sm leading-7'> Currently, I’m honing my skills in software testing while contributing to impactful projects, always driven by a desire to learn, grow, and make a difference in the tech space.</p>

          <div className="mt-6 flex items-center gap-2">
            <svg className="w-20 h-1" viewBox="0 0 100 2">
              <line x1="0" y1="1" x2="100" y2="1" stroke="currentColor" strokeWidth="3" />
            </svg>
            <p className='text-sm font-bold pl-3'>Follow Me</p>
            <ul className='flex gap-4 items-center self-center'>
              <li>
                <a href="https://linkedin.com/in/elizabeth-afolabi-2a6511196" ><FaLinkedinIn className='border border-[#45a29e] rounded-full w-4 h-4 p-2'/> <span className="sr-only">LinkedIn</span></a>
              </li>
              <li>
                <a href="https://github.com/BettyAfolabi" ><FaGithub className='border border-[#45a29e] rounded-full w-4 h-4 p-2'/> <span className="sr-only">Github</span></a>
              </li>
              <li>
              <a href="https://x.com/devduchess" ><FaXTwitter className='border border-[#45a29e] rounded-full w-4 h-4 p-2'/><span className="sr-only">X</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='basis-full lg:basis-1/2'>
        <AboutTabs />
      </div>
    </section>
  )
}
