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
      <div className="overflow-x-auto">
        <ol className="flex flex-col gap-2 items-stretch">
          {renderTabHeaders()}
        </ol>
      </div>
      <div className="mx-2 container relative px-8 border overflow-auto">
        {renderTabContents()}
      </div>
    </div>
  );
};
