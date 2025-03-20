import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="pt-20 pb-12 px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row mt-10 mb-5">
            <div className="basis-full lg:basis-1/2">
                <p className="text-gray-500 text-sm pb-3 font-medium">Intrigued ?</p>
                <h3 className="text-3xl py-3 font-extrabold text-green">Let's Connect</h3>
                <p className="text-white font-normal text-sm max-w-[500px] leading-[20px]">I’m always excited to hear about new ideas, collaborate with creative minds, and explore innovative design solutions. Whether you have a project in mind or just want to chat, I’d love to connect. Let’s build something amazing together.</p>
            </div>

            <div className="basis-full lg:basis-1/2 flex items-center gap-20 lg:justify-evenly mt-10 mb-6 lg:my-0 ">
                <div className="lg:justify-items-end">
                <div className="relative w-40 h-40">
                    <div className="absolute inset-0 bg-gray-700 rounded-lg translate-x-2 translate-y-3"></div>
                    <a
                        href="mailto:betty4web@gmail.com"
                        className="relative bg-gray-900 text-white w-full h-full rounded-lg shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform"
                    >
                        <FaEnvelope className="text-2xl text-gray-300 hover:text-white transition-colors" />
                        <p className="mt-2 text-gray-400 hover:text-white transition-colors text-xs">
                        E-mail me
                        </p>
                    </a>
                </div>
                </div>

                <div className="justify-items-center self-center">
                <div className="flex flex-col justify-center items-center gap-2 lg:gap-4 text-white font-semibold text-sm">
                    <Link to="/" className="hover:text-green">Home</Link>
                    <Link to="#about" className="hover:text-green">About</Link>
                    <Link to="#projects" className="hover:text-green">Project</Link>
                </div>
                </div>
            </div>
        </div>

        <div className="flex justify-between mt-8 border-t border-gray-700 pt-8">
            <p className="text-center text-gray-500 text-xs lg:text-sm ">
                &copy; {new Date().getFullYear()} Elizabeth Afolabi. All Rights Reserved.
            </p>
            <div className="flex gap-2 lg:gap-4">
                <a href="https://linkedin.com/in/elizabethafolabib"><i className="fa-brands fa-linkedin p-1 rounded text-[#45a29e] hover:text-[#66FCF1]" aria-hidden ="true"></i> <span className="sr-only">LinkedIn</span></a>
                <a href="https://github.com/BettyAfolabi"><i className="fa-brands fa-github p-1 rounded text-[#45a29e] hover:text-[#66FCF1]" aria-hidden="true"></i> <span className="sr-only">Github</span></a>
                <a href="https://x.com/devduchess"><i className="fa-brands fa-twitter p-1 rounded text-[#45a29e] hover:text-[#66FCF1]" aria-hidden="true"></i> <span className="sr-only">X</span></a>
            </div>
        </div>
        
    </footer>
  );
}
