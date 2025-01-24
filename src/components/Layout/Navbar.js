"use client";
import React from "react";
import Image from "next/image";

import { useThemeMode } from "@/hooks/useThemeMode";

const NavItem = ({ href, display }) => {
  return (
    <li>
      <a
        href={href}
        className="mx-2 py-2 px-2 block
          bg-[#c9c8c7]
          rounded border-2 border-b-4 border-r-3 border-l-black/25 border-t-black/25 border-r-black border-b-black 
          hover:font-semibold hover:bg-[#c9c8c7]/50"
      >
        {display}
      </a>
    </li>
  );
};

export const Navbar = () => {
  const { theme, toggleTheme } = useThemeMode();
  return (
    <header className="text-xs transition z-20 fixed w-full backdrop-blur px-6 flex flex-wrap items-center">
      <nav className="w-full flex flex-wrap items-center">
        <ul className="flex w-full text-centertext-body text-gray-900 pt-4">
          <a
            href="#hello-world"
            className="mr-auto rounded border border-b-4 border-r-3 relative w-14 hover:opacity-75"
          >
            <Image alt="Richard" src="/images/me.png" className="" fill />
          </a>
          <NavItem href="#about" display="About" />
          <NavItem href="#experience" display="Experience" />
          <NavItem href="#projects" display="Projects" />
          <NavItem href="#contact" display="Contact" />
        </ul>
      </nav>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </header>
  );
};
