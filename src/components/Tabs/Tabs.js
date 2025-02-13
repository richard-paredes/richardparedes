"use client";
import React, { useState, useEffect } from "react";
import { Tab } from "./Tab";

/**
 *
 * @param {{children?: React.ReactElement[][]}} props
 * @returns
 */
export const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState("");
  useEffect(() => {
    if (!children || children.length < 1) {
      return;
    }
    setActiveTab(children[0].props.label);
  }, [children]);

  function renderTabHeaders() {
    return children.map((tabContent) => {
      const { label } = tabContent.props;
      return (
        <Tab
          key={label}
          label={label}
          activeTab={activeTab}
          onClick={setActiveTab}
        />
      );
    });
  }

  function renderTabContents() {
    return children.map((tabContent) => {
      const { label } = tabContent.props;
      return (
        <div
          key={label}
          className={`${
            activeTab === label ? "block p-4" : "top-0 left-0 absolute hidden"
          }`}
        >
          {tabContent}
        </div>
      );
    });
  }

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="flex flex-col items-stretch text-body md:w-1/3 xl:w-1/4 overflow-x-auto">
        <ol className="z-0 mb-4 md:contents text-left flex gap-x-2 flex-1 items-stretch text-grayscaled">
          {renderTabHeaders()}
        </ol>
      </div>
      <div className="xl:mx-2 container relative px-8 border overflow-auto">
        {renderTabContents()}
      </div>
    </div>
  );
};
