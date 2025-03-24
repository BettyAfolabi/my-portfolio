import React, { useState } from "react";
import { projects } from '../utilities/projects'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion"

const ITEMS_PER_PAGE = 7;

export default function Projects() {
    const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div className='px-8 lg:px-24 py-30 bg-[#0d314b]' id="projects">
            <div className='my-2 lg:my-5 flex flex-col overflow-hidden'>
                <motion.h2 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='self-center text-[#45a29e]/80 text-4xl leading-[50px] lg:text-7xl pb-2 font-extrabold uppercase'
                >
                    Showcasing
                </motion.h2>

                <motion.h2 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay:1.0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='self-end text-white text-4xl leading-[50px] lg:text-7xl pt-5 pb-20 lg:pb-28 font-extrabold uppercase text-nowrap'
                >
                    My Works
                </motion.h2>
            </div>

            <div className="mt-10 space-y-20">
                {currentProjects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        initial={{ y: 100, opacity: 0 }} 
                        whileInView={{ y: 0, opacity: 1 }} 
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }} 
                        className={`flex flex-col md:flex-row items-center gap-20 pb-20 2xl:pb-48 border-b-[0.5px] border-gray-600 ${
                            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        }`}
                    >
                        <div className="w-full md:w-1/2">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                
                        <div className="w-full md:w-1/2 space-y-4">
                            <h2 className="text-3xl font-bold pb-10 text-[#45a29e]">{project.name}</h2>
                            <p className="text-white/90 py-4 px-2">{project.description}</p>
                            
                            <div className="flex gap-2">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-[#45a29e]/70 mt-2 border border-[#45a29e]/70 p-2 rounded text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <motion.a 
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 10 }} 
                                transition={{ type: "tween", duration: 0.3 }}
                                className="inline-flex items-center gap-3 text-white font-bold px-4 py-2 rounded-md mt-4 transition"
                            >
                                {project.btnText} <FaArrowRightLong />
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`px-4 py-2 rounded-full ${
                    currentPage === index
                        ? "bg-[#45a29e] text-white"
                        : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                    }`}
                >
                    {index + 1}
                </button>
                ))}
            </div>

        </div>
    );
}
