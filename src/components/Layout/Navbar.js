"use client";
import React from "react";
import Image from "next/image";
import colors from "tailwindcss/colors";
import { Bars3Icon } from "@heroicons/react/20/solid";

import { useThemeMode } from "@/hooks/useThemeMode";
import { Toggle } from "@/components/Toggles";

export const Navbar = () => {
  const { theme, toggleTheme } = useThemeMode();
  return (
    <header className="transition z-20 fixed w-full theme-bg bg-opacity-80 backdrop-filter dark:bg-opacity-80 backdrop-blur-md px-6 md:px-16 flex flex-wrap items-center py-1 md:py-2">
      <div className="flex-1 flex justify-between items-center">
        <a
          href="#hello-world"
          className="relative h-10 w-10 rounded-full lg:ml-4 flex my-1 items-center justify-start lg:mb-0 mb-4 cursor-pointer border-2 border-transparent hover-border-colored z-30"
        >
          <Image
            alt="Richard Paredes"
            src="/images/me.png"
            fill
            className="rounded-full object-contain"
          />
        </a>
        <label
          htmlFor="menu-toggle"
          className="point-cursor md:hidden block z-30"
        >
          <Bars3Icon className="h-5 w-5 stroke-grayscaled z-20" />
        </label>
      </div>
      <input type="checkbox" className="hidden" id="menu-toggle" />
      <div
        className="hidden md:flex md:items-center md:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="md:flex items-center text-center justify-between text-body text-gray-900 dark:text-gray-400 pt-4 md:pt-0">
            <li>
              <a
                href="#about"
                className="md:p-4 py-3 px-0 block border-b-2 border-transparent hover-text-colored hover-border-colored"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="md:p-4 py-3 px-0 block border-b-2 border-transparent hover-text-colored hover-border-colored"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="md:p-4 py-3 px-0 block border-b-2 border-transparent hover-text-colored hover-border-colored"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="md:p-4 py-3 px-0 block border-b-2 border-transparent hover-text-colored hover-border-colored"
              >
                Contact
              </a>
            </li>
            <ul>
              <Toggle checked={theme === "dark"} onToggle={toggleTheme} />
            </ul>
            <div className=""></div>
          </ul>
        </nav>
      </div>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <style jsx>{`
        #menu-toggle:checked + #menu {
          position: fixed;
          display: flex;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          width: 100vw;
          height: 100vh;
          z-index: 20;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background-color: ${theme === "dark"
            ? colors.gray["900"]
            : colors.gray["100"]};
        }
      `}</style>
    </header>
  );
};
