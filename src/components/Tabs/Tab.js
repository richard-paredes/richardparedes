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
      className={`w-full transition flex border-b-4 md:border-b-0 md:border-l-4 px-12 py-2 md:h-full ${
        activeTab === label
          ? "border-colored bg-colored bg-opacity-10 dark:bg-opacity-10"
          : "border-grayscaled-soft"
      } hover-bg-colored hover:text-colored`}
    >
      <span className="my-auto uppercase">{label}</span>
    </li>
  );
};
