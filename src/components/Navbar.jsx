import React, { useEffect, useState } from "react";
import { Fragment } from 'react'
import { Link, useLocation, Outlet } from "react-router-dom";
import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import './comp.css'


function NavItem({ href, children }) {
  const location = useLocation();
  let isActive = location.pathname === href;


  return (
    <li className="list-none">
      <Link
        to={href}
        className={`relative block px-6 sm:px-3 py-2 text-lg sm:text-base transition text-black dark:text-white 
          ${isActive ? "" : "hover:text-green"}`}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-cyan-500/0 dark:from-cyan-400/0 dark:via-cyan-400/40 dark:to-cyan-400/0" />
        )}
      </Link>
    </li>
  );
}

export default function Navigation(props) {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="navbar">
    <nav className="sticky" {...props}>
        <p>Devduchess</p>

        <ul className="navlist">
          <NavItem className="link active" href="/">Home</NavItem>
          <NavItem className="link" href="/#about">About</NavItem>
          <NavItem className="link" href="/#projects">Projects</NavItem>
          <NavItem className="link" href="/events">Events</NavItem>
          <NavItem className="link" href="/blog">Blog</NavItem>
            
        </ul>

        {/* Mobile Naavigation */}
        <div className="sm:hidden">
        <Popover>
            <PopoverButton
              className="relative focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className="bx bx-sm bx-menu text-white hover:text-green cursor-pointer lg:hidden"></i>
            </PopoverButton>
            <Transition
              as={Fragment}
              show={isOpen}
              enter="transition ease-out duration-300 transform"
              enterFrom="opacity-0 translate-y-2"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-200 transform"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-2"
            >
              <PopoverPanel className="absolute left-0 top-0">
                <div className="w-[250px] h-screen bg-black font-normal flex flex-col cursor-pointer">
                  <i
                    className="bx bx-x bx-md hover:text-red-500 self-end my-3 mr-3"
                    onClick={() => setIsOpen(false)}
                  ></i>
                  <NavItem className=" text-white hover:text-green text-base active" href="/" onClick={() => setIsOpen(false)}>Home</NavItem>
                  <NavItem className=" text-white hover:text-green text-base" href="/#about" onClick={() => setIsOpen(false)}>About</NavItem>
                  <NavItem className=" text-white hover:text-green text-base" href="/#projects" onClick={() => setIsOpen(false)}>Projects</NavItem>
                  <NavItem className=" text-white hover:text-green text-base" href="/events" onClick={() => setIsOpen(false)}>Events</NavItem>
                  <NavItem className=" text-white hover:text-green text-base" href="/blog" onClick={() => setIsOpen(false)}>Blog</NavItem>
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>
        </div>
    </nav>
    <Outlet />
    </div>
  )
}
