import React from "react";
import colors from "tailwindcss/colors";
import { useThemeMode } from "@/hooks/useThemeMode";

export const Toggle = ({ checked, onToggle }) => {
  const { theme } = useThemeMode();
  return (
    <div className="flex flex-col items-center justify-center ml-auto mt-3 lg:mt-auto lg:mr-0 lg:ml-1 lg:w-full">
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only checked:bg-gray-100 dark:checked:bg-emerald-400 checked:translate-x-64"
            onClick={onToggle}
            defaultChecked={checked}
          />
          <div className="block bg-gray-300 dark:bg-gray-800 w-10 h-6 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
        </div>
      </label>
    </div>
  );
};
