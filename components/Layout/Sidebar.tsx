import React from 'react';
import { GitHub } from '../Logos/GitHub';
import { LinkedIn } from '../Logos/LinkedIn';

export const Sidebar = () => {
    return <div className="hidden md:block fixed top-10 bottom-10 left-5 h-auto" id="side">
      <div className="h-auto mx-auto w-full flex flex-wrap items-center justify-center flex-col md:h-full">
        <div className="text-xl p-3 font-medium text-black text-center dark:text-gray-500">
          <GitHub className="w-6 stroke-emerald-600 hover:stroke-emerald-700 dark:stroke-emerald-500 dark:hover:stroke-emerald-300" />
        </div>
        <div className="bg-white">
        </div>
        <div className="text-xl p-3 font-medium text-black text-center dark:text-gray-500">
          <LinkedIn className="w-6 stroke-emerald-600 hover:stroke-emerald-700 dark:stroke-emerald-500 dark:hover:stroke-emerald-300"  />
        </div>
      </div>
    </div>
    ;
  }
  