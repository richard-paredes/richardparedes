import React from 'react';
import { GitHub } from '../Icons/Logos/GitHub';
import { LinkedIn } from '../Icons/Logos/LinkedIn';

export const Sidebar = () => {
  return <div className="hidden md:block fixed bottom-5 left-5 h-auto" id="side">
    <div className="h-auto mx-auto w-full flex flex-wrap items-center justify-center flex-col md:h-full">
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
    </div>
  </div>
    ;
}
