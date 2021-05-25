import React, { useState, useEffect } from 'react';
import { useThemeMode } from '../../hooks/useThemeMode';
import { GitHub } from '../Logos/GitHub';
import { LinkedIn } from '../Logos/LinkedIn';
import { Toggle } from '../Toggle';

export const Sidebar = () => {
    const {theme, toggleTheme} = useThemeMode();
  
    return <div className="hidden md:block fixed bottom-5 left-5 h-auto">
      <div className="h-auto mx-auto w-full flex flex-wrap items-center justify-center flex-col md:h-full">
        <div className="text-xl p-3 font-medium text-black text-center dark:text-gray-500">
          {/* {(theme === 'dark') ? <Image src="/images/GitHub_light.png" alt="GitHub icon" width={42} height={42} /> : <Image src="/images/GitHub_dark.png" alt="GitHub icon" width={42} height={42} />} */}
          <GitHub className="w-6 stroke-emerald-600 hover:stroke-emerald-800 dark:stroke-emerald-500 dark:hover:stroke-emerald-300" />
        </div>
        <div className="bg-white">
        </div>
        <div className="text-xl p-3 font-medium text-black text-center dark:text-gray-500">
          {/* <Image src="/images/LinkedIn.png" alt="LinkedIn icon" width={42} height={36} /> */}
          <LinkedIn className="w-6 stroke-emerald-600 hover:stroke-emerald-800 dark:stroke-emerald-500 dark:hover:stroke-emerald-300"  />
        </div>
        <Toggle checked={theme==='dark'} onToggle={toggleTheme} />
      </div>
    </div>
    ;
  }
  