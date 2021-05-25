import React from 'react';
import Image from 'next/image';
import { MenuIcon } from '@heroicons/react/outline';
import { useThemeMode } from '../../hooks/useThemeMode';
import { Toggle } from '../Toggle';
import colors from 'tailwindcss/colors';

export const Navbar = () => {
    const {theme, toggleTheme} = useThemeMode();
    return <header className="px-6 lg:px-16 flex flex-wrap items-center py-2 lg:py-0">
        <div className="flex-1 flex justify-between items-center">
            <a href="#" className="h-10 w-10 rounded-full lg:ml-4 flex my-1 items-center justify-start lg:mb-0 mb-4 cursor-pointer border-2 border-transparent hover:border-emerald-600 dark:hover:border-emerald-400 z-30">
                <Image alt="Richard Paredes" src="/images/me.jpg" width="100%" height="100%" className="rounded-full w-10 h-10" />
            </a>
            <label htmlFor="menu-toggle" className="point-cursor lg:hidden block z-30">
                <MenuIcon className="h-5 w-5 stroke-black dark:stroke-white" />
            </label>
        </div>
        <input type="checkbox" className="hidden" id="menu-toggle" />
        <div className="hidden lg:flex lg:items-center lg:w-auto w-full transition duration-500" id="menu">
            <nav>
                <ul className="lg:flex items-center text-center justify-between text-lg text-black dark:text-white pt-4 lg:pt-0">
                    <li>
                        <a href="#" className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-emerald-400">About</a>
                    </li>
                    <li>
                        <a href="#" className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-emerald-400">Experience</a>
                    </li>
                    <li>
                        <a href="#" className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-emerald-400">Projects</a>
                    </li>
                    <ul>
                        <Toggle checked={theme==='dark'} onToggle={toggleTheme} />
                    </ul>
                <div className="">
                </div>
                </ul>
            </nav>

        </div>
        <style jsx>{`
            #menu-toggle:checked {
                display: block !important;
            }
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
                background-color: ${theme === 'dark' ? colors.gray["900"] : colors.gray["100"]};
            }
        `}</style>
    </header>
}
