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
            activeTab === label ? "block" : "top-0 left-0 absolute hidden"
          } pr-4`}
        >
          {tabContent}
        </div>
      );
    });
  }

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="flex flex-col flex-1 items-stretch text-body md:w-1/3 xl:w-1/4 overflow-x-auto">
        <ol className="z-0 mb-4 md:contents text-left flex flex-1 items-stretch text-grayscaled">
          {renderTabHeaders()}
        </ol>
      </div>
      <div className="container relative md:w-2/3 xl:w-3/4 my-5 md:my-0 md:px-5 rounded-r-md md:h-96 overflow-auto">
        {renderTabContents()}
      </div>
    </div>
  );
};
