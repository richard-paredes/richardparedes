import React from 'react';

export interface TabContentProps {
  label: string;
}

export const TabContent: React.FC<TabContentProps> = ({ children }) => {
  return <>
    {children}
  </>
}