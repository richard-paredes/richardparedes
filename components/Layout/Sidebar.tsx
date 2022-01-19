import React from 'react';
import { GitHub } from '../Icons/Logos/GitHub';
import { LinkedIn } from '../Icons/Logos/LinkedIn';

export const Sidebar = () => {
  return <div className="hidden md:block md:z-10 fixed bottom-12 left-5 h-auto" id="side">
    <div className="h-auto mx-auto w-full flex flex-wrap items-center justify-center flex-col md:h-full">
      <a title="GitHub" target="_blank" href="https://github.com/richard-paredes/" className="border-2 border-transparent p-1 cursor-pointer rounded-md stroke-grayscaled hover-stroke-colored my-1">
        <GitHub className="w-6" />
      </a>
      <a title="LinkedIn" target="_blank" href="https://www.linkedin.com/riparedes/" className="border-2 border-transparent p-1 cursor-pointer rounded-md stroke-grayscaled hover-stroke-colored my-1">
        <LinkedIn className="w-6" />
      </a>
    </div>
  </div>
    ;
}
