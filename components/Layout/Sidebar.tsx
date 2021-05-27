import React from 'react';
import { GitHub } from '../Logos/GitHub';
import { LinkedIn } from '../Logos/LinkedIn';

export const Sidebar = () => {
  return <div className="hidden md:block fixed bottom-5 left-5 h-auto" id="side">
    <div className="h-auto mx-auto w-full flex flex-wrap items-center justify-center flex-col md:h-full">
      {/* <div className="text-xl p-3 font-medium text-black text-center dark:text-gray-500">
        <GitHub className="w-6 stroke-emerald-400 hover:stroke-emerald-700 dark:stroke-emerald-400 dark:hover:stroke-emerald-200" />
      </div> */}
      
      <a className="p-2 my-2 btn-colored stroke-colored">
        <GitHub className="w-6" />
      </a>
      <a className="p-2 my-2 btn-colored stroke-colored">
        <LinkedIn className="w-6 active:bg-emerald-200" />
      </a>
      <a title="GitHub" className="border-2 border-transparent p-1 cursor-pointer rounded-md stroke-grayscaled hover-stroke-colored my-1">
        <GitHub className="w-6" />
      </a>
      <a title="LinkedIn" className="border-2 border-transparent p-1 cursor-pointer rounded-md stroke-grayscaled hover-stroke-colored my-1">
        <LinkedIn className="w-6" />
      </a>
      {/* <a href="https://www.linkedin.com" target="_blank" className="text-xl p-3 transition duration-200 font-medium text-black text-center dark:text-gray-500 hover:cursor-pointer  hover:stroke-emerald-700 border-2 hover:border-emerald-400 hover:bg-emerald-800 border-transparent dark:hover:stroke-emerald-200 rounded-sm">
        <LinkedIn className="w-6 stroke-emerald-400 dark:stroke-emerald-400" />
      </a> */}
    </div>
  </div>
    ;
}
