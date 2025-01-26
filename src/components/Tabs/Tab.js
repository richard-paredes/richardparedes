"use client";
import React from "react";

/**
 *
 * @param {{label: string, activeTab: string, onClick: (label: string) => void }} props
 * @returns
 */
export const Tab = ({ label, activeTab, onClick }) => {
  const handleClick = () => onClick(label);
  return (
    <li
      role="tab"
      onClick={handleClick}
      className={`transition flex border border-b-4 border-r-2 px-12 py-2 h-24 bg-[#c9c8c7] ${
        activeTab === label ? "shadow font-bold bg-[#c9c8c7]/50" : ""
      } hover:font-semibold`}
    >
      <span className="my-auto uppercase">{label}</span>
    </li>
  );
};
