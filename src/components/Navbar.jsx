import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './comp.css'


function NavItem({ href, children }) {
  const location = useLocation();
  let isActive = location.pathname === href;

  return (
    <li>
      <Link
        to={href}
        className={`relative block px-3 py-2 transition text-black dark:text-white 
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
            <li><NavItem className="link active" href="/">Home</NavItem></li>
            <li><NavItem className="link" href="/#about">About</NavItem></li>
            <li><NavItem className="link" href="/#projects">Projects</NavItem></li>
            <li><NavItem className="link" href="/events">Events</NavItem></li>
            <li><NavItem className="link" href="/blog">Blog</NavItem></li>
            
        </ul>
        <div className="bx bx-menu" id="menu-icon"></div>
    </nav>
    </div>
  )
}
