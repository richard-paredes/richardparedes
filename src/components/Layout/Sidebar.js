import React from "react";
import { GitHub } from "@/components/Icons/Logos";
import { LinkedIn } from "@/components/Icons/Logos";
import { Instagram } from "@/components/Icons/Logos";

export const Sidebar = () => {
  return (
    <div className="fixed bottom-12 left-5 h-auto" id="side">
      <div className="h-auto mx-auto w-full flex flex-wrap items-center justify-center flex-col">
        <a
          title="GitHub"
          target="_blank"
          href="https://github.com/richard-paredes/"
          className="p-1 cursor-pointer my-1 border-b-4 border-r-3 border hover:backdrop-brightness-90"
        >
          <GitHub className="w-6 stroke-2 stroke-[#66615e]" />
        </a>
        <a
          title="LinkedIn"
          target="_blank"
          href="https://www.linkedin.com/in/riparedes/"
          className="p-1 cursor-pointer my-1 border-b-4 border-r-3 border hover:backdrop-brightness-90"
        >
          <LinkedIn className="w-6 stroke-2 stroke-[#66615e]" />
        </a>
        <a
          title="Instagram"
          target="_blank"
          href="https://www.instagram.com/richardparedes/"
          className="p-1 cursor-pointer my-1 border-b-4 border-r-3 border hover:backdrop-brightness-90"
        >
          <Instagram className="w-6 stroke-2 stroke-[#66615e]" />
        </a>
      </div>
    </div>
  );
};
