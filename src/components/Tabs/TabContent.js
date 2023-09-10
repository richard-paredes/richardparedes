"use client";
import React from "react";

/**
 *
 * @param {{ label: string, children: React.ReactElement[]}} param0
 * @returns
 */
export const TabContent = ({ children, ...props }) => {
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child))
          return React.cloneElement(child, props);
        return child;
      })}
    </>
  );
};
