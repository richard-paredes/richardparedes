"use client";
import React from "react";
import Image from "next/image";

import { useThemeMode } from "@/hooks/useThemeMode";

const NavItem = ({ className, href, children }) => {
  return (
    <li className={className}>
      <a
        href={href}
        className="py-2 px-2 block bg-[#c9c8c7] rounded border-2 border-b-4 border-r-3 border-l-black/25 border-t-black/25 border-r-black border-b-black  hover:font-semibold hover:bg-[#c9c8c7]/50"
      >
        {children}
      </a>
    </li>
  );
};

export const Navbar = () => {
  const { theme, toggleTheme } = useThemeMode();
  return (
    <header className="text-xs transition z-20 fixed w-full backdrop-blur px-2 xl:px-6 flex flex-wrap items-center">
      <nav className="w-full flex flex-wrap items-center">
        <ul className="flex gap-2 pb-4 lg:pb-0 lg:gap-4 w-full text-gray-900 pt-4 overflow-auto">
          <NavItem
            href="#hello-world"
            className="relative mr-auto min-w-12 rounded border-2 border-b-4 border-r-3 border-l-black/25 border-t-black/25 border-r-black border-b-black  hover:font-semibold hover:brightness-110"
          >
            <Image alt="Richard" src="/images/me.png" className="" fill />
          </NavItem>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#experience">Experience</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#contact">Contact</NavItem>
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
